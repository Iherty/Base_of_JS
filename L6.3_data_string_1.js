'use strict'
/*// Сделать первый символ заглавным
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function usFirst(str) {
    if (!str) return str; // Проверка на пустую строку
    return (str[0].toUpperCase() + str.slice(1)); // если строка пустая возвращает undefined
}

console.log(usFirst('sa'));

// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam (str) {
    let lowerStr = str.toLowerCase();
    let firstCheck = 'viagra'.toLowerCase();
    let secondCheck = 'XXX'.toLowerCase();

    if (lowerStr.includes(firstCheck) || lowerStr.includes(secondCheck)) {
        return true;
    };

    return false;
}

console.log(checkSpam("innocent rabbit"));*/

//Усечение строки

function truncate(str, maxlength) {
    let lengthStr = str.length; // 30

        if (+lengthStr > +maxlength)  {
            //let addStr = lengthStr - maxlength;
            return (`${str.slice(0, maxlength - 1)}...`);
        } else {
            return str;
        }
}


console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

function extractCurrencyValue (str) {

    let start;

        for (let i = 0; i < str.length; i++) {
           if (isFinite(+str[i])) {
             start = i;
             break;
            };
        };

    let result = str.slice(start);
    return parseInt(result);


    
}

console.log(extractCurrencyValue('$120'));