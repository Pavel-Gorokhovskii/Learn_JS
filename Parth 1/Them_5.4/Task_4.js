/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {

    let arr = [];

    while (true) {

        let value = prompt("Введите число");

        if (value === "" || value === null) break;

        arr.push(+value);
    }

    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
}

alert(sumInput());