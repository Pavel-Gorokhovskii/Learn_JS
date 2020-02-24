// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function () {
    alert(this);
})

arr[2](); // вызов на экран this