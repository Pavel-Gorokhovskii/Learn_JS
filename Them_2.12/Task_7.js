// Напишите код, который выводит все простые числа из интервала от 2 до n.

let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let x = 2; x < i; x++) {
            if (i % x == 0) continue nextPrime;
        }


        alert(i);
    }
   