// Проверка логина

let userName = prompt('Введите логин');

if (userName == 'Админ') {

    let password = prompt('Введите пароль');

    if (password == 'Я главный') {
        alert('Здравствуйте');
    } else if (password == '' || password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName == '' || userName == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}