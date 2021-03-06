// 1 Создание массива 
    // литерал массива
    let myArr = ['Saglai', 'Woman', 'Young', 'Smart', 'Beautiful'];


// 2 Изменение массива
    //Получить элемент из массива
    console.log(myArr[0]);

    //Получить последние элементы из массива
    console.log(myArr[myArr.length - 1]);
    console.log(myArr.at (-1)); // короткий синтаксис. Для отрицательных значений выступает от конца
    console.log(myArr.at (1));

    //Заменить элеммент
    myArr[3] = 'IT';
    console.log(myArr);

    //Добавить новый элемент к существующему 
    myArr[5] = '26 years old';
    console.log(myArr);

    //свойство length - общее число элементов массива
    console.log(myArr.length);

// 3 В массиве могут храниться элементы любого типа. 

    let anotherArr = ['Doja cat', { name: 'Amala', age: 27}, true, function() {alert('Woman')}];
    console.log( anotherArr[1].name );
    console.log(anotherArr[3]());


// 4 Методы pop/push, shift/unshift 
    // Структура данных
        //Очередь - упорядоченная коллекция элементов, первый пришел - первый вышел
            // push() добавляет элемент в конец
            // shift() - Удаляет из массива первый элемент и возвращает его:
            let fruits = ["Яблоко", "Апельсин", "Груша"];
            alert( fruits.shift() ); // удаляем Яблоко и выводим его
            alert( fruits ); // Апельсин, Груша

            //unshift - Добавляет элемент в начало массива:          
            fruits.unshift('Яблоко');
            alert( fruits ); // Яблоко, Апельсин, Груша
        //Методы push и unshift могут добавлять сразу несколько элементов:

        //Стек - список элементов, представляющий собой список элементов, организованных по принципу последний пришел - первый вышел
            //push() добавляет элемент в конец
            //let fruits = ["Яблоко", "Апельсин"];
            fruits.push("Груша");
            alert( fruits ); // Яблоко, Апельсин, Груша

            //pop() Удаляет последний элемент из массива и возвращает его
            //let fruits = ["Яблоко", "Апельсин", "Груша"];
            alert( fruits.pop() ); // удаляем "Груша" и выводим его
            alert( fruits ); // Яблоко, Апельсин

// 5 Массивы и объекты - эффективность
    //Массив следует считать особой структурой, позволяющей работать 
        //с упорядоченными данными. Для этого массивы предоставляют специальные методы. 
        //Массивы тщательно настроены в движках JavaScript для работы 
        //с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях.
        //Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект {}.

    //pop() и push() работает быстрее чем shift() и unshift;


// 6 Перебор элементов 
    // Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:
        let arr = ["Яблоко", "Апельсин", "Груша"];
        for (let i = 0; i < arr.length; i++) {
        alert( arr[i] );
        };
    
    // Но для массивов возможен и другой вариант цикла, for..of:
        //let fruits = ["Яблоко", "Апельсин", "Слива"];

        // Цикл for..of не предоставляет доступа к номеру текущего элемента, 
        //только к его значению
        for (let fruit of fruits) {
        alert( fruit );
        };

// Немного о «length»
        // Свойство length автоматически обновляется при изменении массива. 
        //Если быть точными, это не количество элементов массива, а наибольший цифровой индекс плюс один.

            let fruitss = [];
            fruitss[123] = "Яблоко";
            alert( fruitss.length ); // 124

        //Ещё один интересный факт о свойстве length – его можно перезаписать.
        //Если мы вручную увеличим его, ничего интересного не произойдёт. Зато, если мы уменьшим его, массив станет короче. Этот процесс необратим
        //Значение не восстановить

            let arr1 = [1, 2, 3, 4, 5];
            arr.length = 2; // укорачиваем до двух элементов
            alert( arr ); // [1, 2]
            arr.length = 5; // возвращаем length как было
            alert( arr[3] ); // undefined: значения не восстановились


