// Напишите код, который выводит все простые числа из интервала от 2 до n.


let sum = 0;
let number;
let num = 1;
let int = prompt('Введите интервал числа', ''); // 5

for (let i = 2; i <= int; i++) { // 2 < 
    
    number = i; 

    let sum = 0;
    for (let j = 2; j <= number; j++) {
        if (number % j === 0) {
            sum += 1;
        }
    } 

    if (sum <= 1) {
        alert(number);
    }
}



