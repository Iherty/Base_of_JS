//Задача 1. Могут ли быть равны 2 объекта созданные в разных конструкторах
/*let obj = {};

function User(name) {
    this.name = name;
    this.isAdmin = false;
    return obj;
}

function Person(name) {
    this.name = name;
    this.isAdmin = false;
    return obj;
}

let saglai = new User('Саглай');
let saglai2 = new Person('Саглай');

console.log(saglai == saglai2); */


//Задача 2 - Создание калькулятора при помощи конструктора
/*function Calculator() {
    
    this.read = function() {
        this.property1 = +prompt('Введите первое число', '');
        this.property2 = +prompt('Введите второе число', '');
    };

    this.sum = function() {
        return (this.property1 + this.property2);
    };

    this.mul = function() {
        return (this.property1 * this.property2);
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

//Задача 3 Создаём Accumulator

