let num1 = 24
let num2 = 12

/* Declaradas */
function suma() {
    let num1 = 90
    let num2 = 10
    return num1 + num2
}
let resultado = suma(15, 60)
console.log(resultado);

/* Expresadas */
let suma2 = function (num1, num2) {
    return num1 + num2
}

/* Arrow */

let suma3 = (num1, num2) => num1 + num2

let resultado2 = suma2(25, 25)
let resultado3 = suma3(75, 25)

/* 
console.log(resultado2);
console.log(resultado3); */

let calculadora = {
    num1: 45,
    num2: 15,
    suma: () => this.num1 + this.num2,
    sumaBienHecha: function () {
        return this.num1 + this.num2
        /* return calculadora.num1 + calculadora.num2 */
    },
    division: function (num1, num2) {
        if (num1 === 0 || num2 === 0) {
            return "No se puede dividir por cero"
        } else {
            return num1 / num2
        }
    },
    divisionTernal: (num1, num2) => num1 === 0 || num2 === 0 ?"No se puede dividir por cero": num1 / num2
}

console.log(calculadora.divisionTernal(50, 7));