/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;

    for (let i of arr) { // для каждого элемента массива
        sum += i; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, sum); // запоминаем максимум на данный момент
        if (sum < 0) sum = 0; // ноль если отрицательное
    }

    return maxSum;
}
alert(getMaxSubSum([-1, -2, 3, 4, -9, 6])); // 7