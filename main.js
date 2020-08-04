var firstNumber = +prompt('Введите первое число');
var secondNumber = +prompt('Введите второе число');
var act = prompt('Выберете дейстивия с числами * / + -');
switch (act) {
    case '+':
        alert(firstNumber + secondNumber)
        break;
    case '-':
        alert(firstNumber - secondNumber)
        break;
    case '*':
        alert(firstNumber * secondNumber)
        break;
    case '/':
        alert(firstNumber / secondNumber)
        break;
    default:
        alert('Вы выбрали не математическое действие')
        break;
}