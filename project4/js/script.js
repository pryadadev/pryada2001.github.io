'use strict';

const inputName = document.querySelector('.input-name');
const inputDate = document.querySelector('.input-date');
const inputComment = document.querySelector('.input-comment');
const btnSubmit = document.querySelector('.btn-submit');

const currentDate = new Date();

const commentsList = [
    {
        name: 'Никита',
        date: new Date(currentDate - 2 * 24 * 3600 * 1000).toLocaleDateString(),
        time: currentDate.toLocaleTimeString().slice(0, -3),
        text: 'Как принято считать, сделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример высокой конъюнктуры, будут объявлены подтверждающими общечеловеческие нормы этики и морали. Современные технологии достигли такого уровня, что начало повседневной работы по формированию позиции прекрасно подходит для реализации благоприятных перспектив.',
        like: 46,
        isLiked: false,
    },
    {
        name: 'Александр',
        date: new Date(currentDate - 24 * 3600 * 1000).toLocaleDateString(),
        time: currentDate.toLocaleTimeString().slice(0, -3),
        text: 'Лишь диаграммы связей лишь добавляют фракционных разногласий и обнародованы. Вот вам яркий пример современных тенденций — существующая теория предопределяет высокую востребованность переосмысления внешнеэкономических политик.',
        like: 28,
        isLiked: true,
    },
    {
        name: 'Сергей',
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString().slice(0, -3),
        text: 'В рамках спецификации современных стандартов, диаграммы связей лишь добавляют фракционных разногласий и объявлены нарушающими общечеловеческие нормы этики и морали.',
        like: 11,
        isLiked: false,
    },
];

function printCommentsList() {
    document.querySelector('.comments-list').innerHTML = '';
    for (let [i, listItem] of Object.entries(commentsList)) {
        const comment = document.createElement('div');
        comment.id = `comment-${i}`;
        comment.className = 'comment';
        comment.innerHTML = `
        <div class="flex-wrapper">
            <div class="author">${listItem.name}</div>
            <div class="date">${((date) => {
                if (new Date().getDate() - parseInt(date.slice(0, 2)) == 1) {
                    return 'вчера';
                } else if (new Date().getDate() - parseInt(date.slice(0, 2)) == 0) {
                    return 'сегодня';
                }
                return date;
            })(listItem.date)}, ${listItem.time}</div>
            <ion-icon id="delete-${i}" class="delete" name="trash-outline" data-delete></ion-icon>
        </div>
        <div class="text">
            ${listItem.text}
        </div>
        <div id="like-${i}" class="like" data-like>${listItem.isLiked ? '❤️' : '🤍'} ${listItem.like}</div>
        `;
        document.querySelector('.comments-list').append(comment);
    }
}

printCommentsList();

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    if (inputName.value.trim() == '' || inputComment.value.trim() == '') {
        if (inputName.value.trim() == '' && !inputName.classList.contains('input-error')) {
            inputName.classList.toggle('input-error');
            document.querySelector('.input-name-error-message').classList.toggle('hidden');
        }
        if (inputComment.value.trim() == '' && !inputComment.classList.contains('input-error')) {
            inputComment.classList.toggle('input-error');
            document.querySelector('.input-comment-error-message').classList.toggle('hidden');
        }
        return;
    }

    const currentDate = new Date();

    commentsList.push({
        name: inputName.value.trim(),
        date: inputDate.value == '' ? currentDate.toLocaleDateString() : new Date(inputDate.value).toLocaleDateString(),
        time: currentDate.toLocaleTimeString().slice(0, -3),
        text: inputComment.value.trim(),
        like: 0,
        isLiked: false,
    });

    inputName.value = '';
    inputDate.value = '';
    inputComment.value = '';

    printCommentsList();
});

inputName.addEventListener('focus', (event) => {
    if (inputName.classList.contains('input-error')) {
        inputName.classList.toggle('input-error');
        document.querySelector('.input-name-error-message').classList.toggle('hidden');
    }
});

inputComment.addEventListener('focus', (event) => {
    if (inputComment.classList.contains('input-error')) {
        inputComment.classList.toggle('input-error');
        document.querySelector('.input-comment-error-message').classList.toggle('hidden');
    }
});

inputName.addEventListener('input', (event) => {
    if (inputName.classList.contains('input-error')) {
        inputName.classList.toggle('input-error');
        document.querySelector('.input-name-error-message').classList.toggle('hidden');
    }
});

inputComment.addEventListener('input', (event) => {
    if (inputComment.classList.contains('input-error')) {
        inputComment.classList.toggle('input-error');
        document.querySelector('.input-comment-error-message').classList.toggle('hidden');
    }
});

document.addEventListener('click', (event) => {
    const commentId = parseInt(event.target.id.slice(-1));
    if (event.target.dataset.like != undefined) {
        if (commentsList[commentId].isLiked == false) {
            commentsList[commentId].like += 1;
            commentsList[commentId].isLiked = true;
        } else {
            commentsList[commentId].like -= 1;
            commentsList[commentId].isLiked = false;
        }
    } else if (event.target.dataset.delete != undefined) {
        delete commentsList[commentId];
    }
    printCommentsList();
});

inputComment.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault();
        btnSubmit.click();
        return;
    }
});
