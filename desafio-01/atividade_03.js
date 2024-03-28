const lista = [3, 1, 2, 4, 6, 5];
const pares = [];
const impares = [];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        pares.push(lista[i]);
    } else {
        impares.push(lista[i]);
    }
}

const ordenado = pares.concat(impares);
console.log(ordenado); 
