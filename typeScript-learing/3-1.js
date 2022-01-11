var number1 = 1;
var number2 = 2;
var number3 = 3;
function doSomething() {
    //  用var声明变量后，变量会在函数作用域中持续存在，不会运行完销毁
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally', i);
}
// doSomething()
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(number1, number2));
