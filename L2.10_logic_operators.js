//Напишите код, который будет спрашивать логин с помощью prompt.

let login = prompt('Логин?', '');

if (login === '' || login === null) {
    alert('Отмена');
} else if (login === 'Админ') {
    let password = prompt('Пароль?', '');
        if (password === 'Я главный') {
        alert('Здравствуйте!')
        } else if (password === '' || password === null) {
        alert('Отмена');
        } else {
        alert('Неверный пароль');
        };
        
} else {
    alert("Я вас не знаю");
};