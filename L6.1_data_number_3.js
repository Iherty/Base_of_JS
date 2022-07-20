function readNumber () {

    while (true) {
        let number = prompt('Введите числовое значение', 0);

        if ( number === null || number === '') {
                return null;
        } else if ( !isNaN(number)) {
            alert (number);
        }
    }

}

console.log(readNumber());


//Решение в учебнике
// Так как цикл должен повторяться пока не будет введено число. 
// Пока не будет введено, что-то помимо числа = false. 
// В моем цикле вводиться число, проверяется, потом идет алгоритм
// В решении учебника сначала требуется ввод числа снова и снова. Потом проверяется?

/*function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);*/