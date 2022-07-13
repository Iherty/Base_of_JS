//Повторное решение задач для закрепления

//Привет object
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name; 
// верно

// Проверка на пустоту

function isEmpty(obj) {
    let result;

        for(let key in obj) {
        result = key;  
        }

    if (result === undefined) {
        return true;
    }
  return false;
}

let user = {
  age: 5,
};

console.log(isEmpty(user));

/*for (key in object) {
  тело цикла НАЧНЕТ выполняется для каждого свойства объекта
  тело цикла не будет выполняться если цикла нет
} */

// Сумма свойств
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;

  for(let key in salaries) {
    if( typeof key === Number) {
        sum += salaries[key]
    }
    return sum;
  }

  console.log(sum); 

  //Умножаем все числовые свойства на 2

  function multiplyNumeric(obj) {
    let result1;

    for(let key in obj) {
    result1 = key; 
    }

    while(typeof result1 === Number) {
        result1 * 2;
    }

  }
