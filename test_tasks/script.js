'use strict';

//——————————————————————————————————————————————————————————————————————————————
// Задача 1: Функция получает массив городов, возвращает их в строке через запятую и точкой в конце
console.log('\nЗадача 1');

const task1 = function (cities) {
    return cities.join(', ') + '.';
};

console.log(task1(['Москва', 'Санкт-Петербург', 'Воронеж']));

//——————————————————————————————————————————————————————————————————————————————
// Задача 2: Функция получает число, возвращает это число, округлённое до кратного 5
console.log('\nЗадача 2');

const task2 = function (n) {
    return Math.round(n / 5) * 5;
};

for (const n of [27, 27.8, 41.7]) {
    console.log(`${n} => ${task2(n)}`);
}

//——————————————————————————————————————————————————————————————————————————————
// Задача 3: Функция получает число, возвращает слово "компьютер" в нужном падеже
console.log('\nЗадача 3');

const task3 = function (n) {
    let ending = ''; // значение подходит если n % 10 === 1, поэтому проверки на 1 не будет
    const ovEnding = new Set([5, 6, 7, 8, 9]); // set потому что у него удобный метод .has()
    const aEnding = new Set([2, 3, 4]);
    if ((n >= 10 && n <= 20) || ovEnding.has(n % 10)) {
        ending = 'ов';
    } else if (aEnding.has(n % 10)) {
        ending = 'а';
    }
    return 'компьютер' + ending;
};

for (const n of [25, 41, 1048]) {
    console.log(`${n} ${task3(n)}`);
}

//——————————————————————————————————————————————————————————————————————————————
// Задача 4: Функция получает число, возвращает true, если оно простое, иначе false
console.log('\nЗадача 4');

const task4 = function (n) {
    let flag = true;
    const limit = Math.trunc(Math.sqrt(n));
    for (let i = 2; i <= limit; ++i) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
};

for (const n of [3, 4, 5, 6, 7]) {
    console.log(`Число ${n} ${task4(n) ? 'простое' : 'составное'}`);
}

//——————————————————————————————————————————————————————————————————————————————
// Задача 5: Функция получает 2 массива, возвращает массив, в котором те числа, которые
//           как минимум 2 раза встречаются в каждом из вхожных массивов
console.log('\nЗадача 5');

const task5 = function (arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];
    for (const n of set1) {
        if (
            arr1.indexOf(n) !== -1 &&
            arr1.lastIndexOf(n) !== -1 &&
            arr1.indexOf(n) !== arr1.lastIndexOf(n) &&
            arr2.indexOf(n) !== -1 &&
            arr2.lastIndexOf(n) !== -1 &&
            arr2.indexOf(n) !== arr2.lastIndexOf(n)
        ) {
            result.push(n);
        }
    }
    return result.sort();
};

const arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
console.log(arr1, arr2);
console.log(task5(arr1, arr2));

//——————————————————————————————————————————————————————————————————————————————
// Задача 6: Функция получает число, выводит строку, содержащую таблицу умножения
//           до введённого числа, форматированную определённым образом:
//           между каждым столбцом 1 пробел, в столбце числа прижаты к правой стороне
console.log('\nЗадача 6');

const task6 = function (n) {
    const arr = []; // массив для составления таблицы
    let row = [];

    // заполнение 1 строки
    for (let i = 0; i <= n; ++i) {
        row.push(i);
    }
    arr.push(row);

    // составление таблицы в массиве
    for (let i = 1; i <= n; ++i) {
        row = [i];
        for (let j = 1; j <= n; ++j) {
            row.push(i * j);
        }
        arr.push(row);
    }

    const lengthMax = []; // длина (в символах) наибольшего числа в столбце

    // вычисление этих длин
    for (let j = 1; j <= n; ++j) {
        lengthMax.push(String(arr[n][j]).length);
    }

    let result = ' '; // строка для составления таблицы в требуемом виде

    // составление таблицы
    for (let i = 0; i <= n; ++i) {
        // let j = i === 0 ? 1 : 0 нужно чтобы не выводить '0' в первой строке
        for (let j = i === 0 ? 1 : 0; j <= n; ++j) {
            result += (j !== 0 ? ' '.repeat(1 + lengthMax[j - 1] - String(arr[i][j]).length) : '') + String(arr[i][j]);
        }
        result += '\n';
    }

    console.log(result);
};

task6(5);

//——————————————————————————————————————————————————————————————————————————————
