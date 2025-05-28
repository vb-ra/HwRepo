//Exercise 2: Recursive Fibonacci sequence
var n = 11;
function fibonacci(n) {
    if (n > 10) {
        console.log("Numbers bigger than 10 are not allowed");
        return undefined;
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var result = fibonacci(n);
if (result) { // se podria preguntar solamente por result
    console.log("F(".concat(n, ") = ").concat(fibonacci(n)));
}
