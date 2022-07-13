// 1 ex.
let user = {
    name: 'John',
    surname: 'Smith',
};

user.name = 'Pete';
delete user.name;

// 2 ex.
function isEmpty(obj) {
    let key;
    for (key in obj) {
    alert(key);
    };
  
    if (key === undefined) {
        return true;
    }
    return false;
}

let schedule = {
  name: 'Geltsen',
};

alert(isEmpty(schedule));

/* function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
} */

// 3 ex.
/*let sum;

function culcSum(obj) {
    let key;
    for (key in obj) {
    alert(key);
    };
  
    if (key === undefined) {
        return 0;
    } else {
       sum = obj[John] + obj[Ann] + obj[Pete];
       alert(sum);
    }
}*/



let sum = 0;

function culcSum(obj) {
    let key;
    for (key in obj) {};
  
    if (key === undefined) {
        return 0;
    } else {
            for (let key in obj) {
            sum += obj[key];
            }
        return sum;
     }
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

alert(culcSum(salaries));

// Решение из книги
/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390*/