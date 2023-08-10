/*
    Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), 
    pe. miFuncion(5) devolverá 120.
*/

const factorialNumber = (number=undefined) => {
    if (number < 0) return console.warn("El número ingresado debe ser positivo");
    if (!Number.isInteger(number)) return console.warn("Debe ingresar un número");

    let factorial = 1;

    for (let i=2; i<=number;i++){
        factorial *= i;
    }

    return console.info(`El número ingresado es ${number} y su factorial es: ${factorial}`);
}

console.info("EJERCICIO 11");
factorialNumber();
factorialNumber(-20);
factorialNumber(0);
factorialNumber(1);
factorialNumber(2);
factorialNumber(3);
factorialNumber(4);
factorialNumber(5);