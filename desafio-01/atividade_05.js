const tamanho = 6;
const fibonacci = [1, 1];

while (fibonacci.length < tamanho) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

console.log(fibonacci); 
