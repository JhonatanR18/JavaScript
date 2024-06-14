const operación = String(prompt("Elije la operación: sumar, restar, multiplicar, dividir, potencia, raíz cuadrada, raíz cúbica."))

if(operación === "sumar" || operación === "restar" || operación === "multiplicar" || operación === "dividir"){
    const cantidad = Number(prompt(`¿Cuantos números desea ${operación}?`));
    let primerNumero = Number(prompt(`Ingrese el primer número a ${operación}`));
    total = primerNumero 
    for (let i = 2; i <= cantidad; i++){
        const numero = Number(prompt(`Ingrese número a ${operación}.`));
        if (operación === "sumar"){
            total += numero
        } else if (operación === "restar"){
            total -= numero
        } else if (operación === "multiplicar"){
            total *= numero
        } else if (operación === "dividir"){
            if (numero === 0){
                alert("Error, no se puede dividir entre 0.");
                continue;
            }
            total /= numero;
        }
    }
} else if (operación === "raíz cuadrada" || operación === "raíz cúbica"){
    let raíz = Number(prompt(`${operación} de:`));
    if(operación === "raíz cuadrada"){
        total = Math.sqrt(raíz)
    } else if (operación === "raíz cúbica"){
        total = Math.cbrt(raíz)
    }
} else if (operación === "potencia"){
    let base = Number(prompt(`Ingrese número base:`));
    let exponente = Number(prompt(`Ingrese exponente:`));
    total = Math.pow(base, exponente);
} else{
    alert("Error, dato incorrecto.")
}


console.log(total);
alert("El resultado es: " + total)





// const numero = Number(prompt(`Ingrese número a ${operación}`)) //````
//     if (operación === "sumar"){
//         total = resultado += numero;
//     } else if (operación === "restar"){
//         total = resultado -= numero;
//     } else if (operación === "multiplicar"){
//         total = resultado *= numero;
//     } else if (operación === "dividir"){
//         if (numero === 0){
//             alert("Error, no se puede dividir entre 0.");
//             continue;
//         }
//         total = resultado /= numero;
//     }


// else if (operación === "raíz cuadrada"){
//     total = Math.sqrt(resultado)
// }