
//Exercise 2: Recursive Fibonacci sequence
const n = 8;

function fibonacci(n: number): number | undefined { // Se utilizó "undefined" en vez de "null"
    if (n > 10) {
        console.log(`Numbers bigger than 10 are not allowed`);
        return undefined;
    }
    
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(n);
if (result) { // Se pregunta solamente por result
    console.log(`F(${n}) = ${fibonacci(n)}`);
}


