'use strict';

// Получение элементов из DOM
const inputText = document.querySelector('.input-text');
const btnSubmit = document.querySelector('.btn-submit');
const resultList = document.querySelector('.result-list');
const inputTextErrorMessage = document.querySelector('.input-text-error-message');

// Действие для кнопки "Искать"
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    // Если ничего не введено
    if (inputText.value.trim() == '') {
        if (inputText.value.trim() == '' && !inputText.classList.contains('input-error')) {
            inputText.classList.toggle('input-error');
            inputTextErrorMessage.classList.toggle('hidden');
        }
        return;
    }

    // Функция выводит текст вместо null значений
    const nullCheck = (text) => (text == null ? '&lt;empty&gt;' : text);

    // Получение данных
    const page = 1;
    const per_page = 10;
    const query = inputText.value.trim();
    fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${per_page}`)
        .then((response) => response.text())
        .then((dataJSON) => {
            const dataObj = JSON.parse(dataJSON);
            resultList.innerHTML = '';

            // Если ничего не найдено
            if (dataObj.items.length == 0) {
                const nothingMessage = document.createElement('div');
                nothingMessage.className = 'nothing-message';
                nothingMessage.innerHTML = 'Ничего не найдено!';
                resultList.append(nothingMessage);
                return;
            }

            // Вывод в DOM данных полученных из API
            for (let item of dataObj.items) {
                const repository = document.createElement('div');
                repository.className = 'list-item';
                repository.innerHTML = `
                <a class="header" href="${item.html_url}" target="_blank">
                    ${item.name}
                </a>
                <div class="grid-container">
                    <div class="property-name">Owner:</div>
                    <div>${nullCheck(item.owner.login)}</div>
                    <div class="property-name">Description:</div>
                    <div>${nullCheck(item.description)}</div>
                    <div class="property-name">Size:</div>
                    <div>${item.size.toLocaleString('ru-RU')}</div>
                    <div class="property-name">Main language:</div>
                    <div>${nullCheck(item.language)}</div>
                </div>
                `;
                resultList.append(repository);
                const hr = document.createElement('div');
                hr.className = 'hr';
                resultList.append(hr);
            }
        });
});

function removeInputTextError() {
    if (inputText.classList.contains('input-error')) {
        inputText.classList.toggle('input-error');
        inputTextErrorMessage.classList.toggle('hidden');
    }
}

inputText.addEventListener('focus', removeInputTextError);
inputText.addEventListener('input', removeInputTextError);
