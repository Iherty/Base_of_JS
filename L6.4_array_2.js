/*//Операции с массивами

let style = [
    'Джаз', 
    'Блюз',
];

// Добавьте «Рок-н-ролл» в конец.
style.push('Рок-н-ролл');
console.log(style);

// 3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
style[Math.floor((style.length - 1)/ 2)] = 'Классика';
console.log(style);

// 4 Удалите первый элемент массива и покажите его.

console.log(style.shift());

// 5 Вставьте Рэп и Регги в начало массива.

style.unshift('Рэп', 'Регии');
console.log(style) */

// Задача: сумма введенных чисел

    function sumInput() {
        let arrSum = [];
        let result = 0;
        let value;

            while(true) {
                value = prompt('Введите значение', ''); // '', null, 's'

                if ( value === '' || value === null || isNaN ( +value )) {
                    break;
                } else {
                    arrSum.push(+value);
                };
            };

            for (let num of arrSum) { 
                result += num; 
                console.log(result);
                console.log(arrSum);
            };
        
        return `Результат ${result}`;
    };

console.log(sumInput());
