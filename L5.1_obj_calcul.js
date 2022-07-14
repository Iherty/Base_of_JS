// Задача калькулятор 
'use strict'
let calculator = {

    read(val1, val2) {
        this.prop1 = val1;
        this.prop2 = val2;
        /*return {
           'this.prop1': this.prop1, 
           'this.prop2': this.prop2,
        };*/ // В задаче написано, что функция должна только сохранять, не возвращать. Поэтому закомментировала значение. 
        // Без return значения после функции будут изменены? 
        //Я думала без return новые значения так и останутся внутри функции, а снаружи останутся старые значения свойств. 
    },
    
    sum() {
        return (this.prop1 + this.prop2);
    },

    mul() {
        return (this.prop1 * this.prop2);
    },
}


console.log(calculator.read(1, 2));
alert( calculator.sum() );
alert( calculator.mul() );

let hi = calculator.read(1, 2);
console.log(hi);





//Задача цепь вызовов
/*let ladder = {
    step: 0,
    up() {
      this.step++;
      return ladder; // Лучше написать return this
    },
    down() {
      this.step--;
      return ladder; // Лучше написать return this
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
    }
  };

  ladder.up().up().down().up().showStep();*/