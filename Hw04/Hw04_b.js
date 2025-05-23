var n = 8;
function fibonacci(n) {
    if (n > 10) {
        console.log("Numbers bigger than 10 are not allowed");
        return null;
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var result = fibonacci(n);
if (result !== null) {
    console.log("F(".concat(n, ") = ").concat(fibonacci(n)));
}
