/*Mostrar en consola la secuencia de Fibonacci: 
a.- Entre los números 0 y 1000.
b.- Números pares entre 0 y 1000.
c.- Números impares entre 0 y 1000. */

// Secuencia de Fibonacci entre 0 y 1000 
const secuenciaFibonacci = (max) => {
    const secuencia = [0, 1];
    for (let i = 2; ; i++) {
        const siguiente = secuencia[i - 1] + secuencia[i - 2]; // Fórmula de Fibonacci
        if (siguiente > max) break; // Detener si supera el parámetro entregado
        secuencia.push(siguiente);
    }
    return secuencia;
}

const numFibonacci = secuenciaFibonacci(1000);
console.log("a.- Secuencia de Fibonacci entre 0 y 1000:", numFibonacci);

// Filtrar números pares e impares
const pares = numFibonacci.filter(num => num % 2 === 0);
const impares = numFibonacci.filter(num => num % 2 !== 0);

console.log("b.- Números pares en la secuencia de Fibonacci:", pares);
console.log("c.- Números impares en la secuencia de Fibonacci:", impares);
