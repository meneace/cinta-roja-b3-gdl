numeros = [2, 3, 4, 5, 9, 7, 1, 8, 0, 9];

/*for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        return numero2 = numeros[i];
    }
}*/

var a = numeros.sort();
console.log(a);

for (let i = 0; i < a.length; i++) {
    if (i == a.length - 1) {
        console.log(a[i]);
    }
}

//Usamos el mismo arreglo que al inicio y utilizamos la funcion "reduce" que hace la suma del arreglo
function Sumar(total, num) {
    return total + num;
}
console.log(numeros.reduce(Sumar));

//Encontrar los numeros pares
var c = numeros.sort();
for (let p = 0; p < c.length; p++) {
    let q = c[p] % 2;
    if (q === 0) {
        console.log(c[p]);
    }
}



//Encontrar el numero repetido
var d = numeros.sort();
for (let r = 0; r < d.length; r++) {
    let s = d[r];
    if (s == (s - 1)) {
        console.log(d[r]);
    }
}






//Encontrar el numero faltante
var b = numeros.sort();
for (let o = 0; o < b.length; o++) {
    if (o !== b[o]) {
        console.log(b[o] - 1);
        return;
    }
}