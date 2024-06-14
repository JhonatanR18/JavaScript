function sumar(num1, num2) {
    const resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado);
    return resultado
}
const primerSuma = sumar(10,20) //30
console.log(primerSuma);
const segundaSuma =sumar(1,100) //101
console.log(segundaSuma);
const terceraSuma = sumar(-100,200) //100
console.log(terceraSuma);
const sumaTotal = primerSuma + segundaSuma + terceraSuma
console.log("El resultado final es: " + sumaTotal)

const imprimirResultado = (num1, num2, operación)=> {
    if (operación === "sumar"){
        const suma = num1 + num2
        console.log("El resultado de la suma es: " + suma)
        return suma
    }
    else if (operación === "restar"){
        const restar = num1 - num2
        console.log("El resultado de la resta es: " + restar);
        return restar
    }
    else if ( operación === "multiplicar"){
        const multiplicar = num1 * num2
        console.log("El resultado de la multiplicación es: " + multiplicar)
        return multiplicar
    }
    else if (operación === "dividir"){
        const dividir = num1 / num2
        console.log("El resultado de la división es: " + dividir);
        return dividir
    }
}
// const ingreseNum1 = Number(prompt("Ingrese primer numero"))
// const ingreseNum2 = Number(prompt("Ingrese segundo numero"))
imprimirResultado(10,20,"sumar") // imprimirResultado(ingreseNum1,ingreseNum2,"sumar") 
imprimirResultado(10,20,"restar") 
imprimirResultado(10,20,"multiplicar")
imprimirResultado(10,20,"dividir")

const imprimirNumero = (numero) => console.log(numero);
imprimirNumero (20)
imprimirNumero (100)
imprimirNumero(-50)