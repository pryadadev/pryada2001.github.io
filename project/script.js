'use strict';
btnCompleteOGEMath.addEventListener('click', function(e) {
    let answer = [], trueAnswer = ['7,79', '4', '4', '-0,6;0,6', '231', '7', '8', '2', '10', '69', '112', '195', '12', '4', '10', '2880', '12', '1', '0,125', '60', '-7;1;7', '10', '-6;6', '9,225', '15'];
    let countCompleteTasksVariable = 0, countPrimaryScoreVariable = 0, yourMarkVariable = 0;
    let allInputs = document.getElementsByClassName('inputAnswer');
    let yourAns = document.getElementsByClassName('yourAnswer');
    for (let i = 0; i < 25; ++i) {
        answer[i] = (allInputs[i]).value;
    }
    for (let i = 0; i < 25; ++i) {
        (yourAns[i]).innerHTML = answer[i];
        if (answer[i] == trueAnswer[i]) {
            (yourAns[i]).classList.add('greenBG');
            ++countCompleteTasksVariable;
            if (i <= 20)
                ++countPrimaryScoreVariable;
            if (i > 20)
                countPrimaryScoreVariable += 2;
        }
        else {
            (yourAns[i]).classList.add('redBG');
        }
    }
    if (countPrimaryScoreVariable >= 0 && countPrimaryScoreVariable <= 7)
        yourMarkVariable = 2;
    if (countPrimaryScoreVariable >= 8 && countPrimaryScoreVariable <= 14)
        yourMarkVariable = 3;
    if (countPrimaryScoreVariable >= 15 && countPrimaryScoreVariable <= 21)
        yourMarkVariable = 4;
    if (countPrimaryScoreVariable >= 22)
        yourMarkVariable = 5;
    yourMark.innerHTML = yourMarkVariable;
    countPrimaryScore.innerHTML = countPrimaryScoreVariable;
    countCompleteTasks.innerHTML = countCompleteTasksVariable;
    let allTasks = document.getElementsByClassName('task');
    let allPartNames = document.getElementsByClassName('partName');
    let allPartNumbers = document.getElementsByClassName('partNumber');
    for (let i = 0; i < 26; ++i) {
        (allTasks[i]).classList.add('hidden');
    }
    for (let i = 0; i < 5; ++i) {
        (allPartNames[i]).classList.add('hidden');
    }
    for (let i = 0; i < 3; ++i) {
        (allPartNumbers[i]).classList.add('hidden');
    }
    btnCompleteOGEMath.classList.add('hidden');
    yourScoreId.classList.remove('hidden');
    scoreTableId.classList.remove('hidden');
});
