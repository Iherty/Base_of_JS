const jsOfficialNameCheck = prompt('Какое «официальное» название JavaScript?', '');

    if (jsOfficialNameCheck === 'ECMAScript') {
        alert('Верно');
    } else {
        alert('Не знаете? ECMAScript!');
    };


// Задение 3. Другой код ниже. 
let userCode = prompt('Код?', 0);

if (userCode > 0) {
    alert(1);
} else if (userCode < 0) {
    alert(-1)
} else {
    alert(0);
}

let userName = prompt('Какое число?', 0);

let sms = (userName > 0) ? 1 :
    (userName < 0) ? -1 :
    0;

// Задение 4. Перепишите if в ?
let result = (a + b < 4) ? 'Мало' : 'Много';

// Задание 5. Перепишите 'if..else' в '?'

let messagess;

if (login == 'Сотрудник') {
    messagess = 'Привет';
  } else if (login == 'Директор') {
    messagess = 'Здравствуйте';
  } else if (login == '') {
    messagess = 'Нет логина';
  } else {
    messagess = '';
  }


let message = (login == 'Сотрудник') ? 'Привет':
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';


















