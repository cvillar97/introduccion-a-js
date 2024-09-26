let listaNumeros = document.querySelectorAll("li")

let promedio = document.querySelector("#promedio")
let numeroMenor = document.querySelector("#menor-numero")
let numeroMayor = document.querySelector("#mayor-numero")
let masFrecuente = document.querySelector("#numero-mas-frecuente")

let arrayNumeros = []

for (let i = 0; i < listaNumeros.length; i++) {
    arrayNumeros.push(Number(listaNumeros[i].textContent))
}

mostrarResultados()

function mostrarResultados() {
    promedio.textContent = "El promedio es " + calcularPromedio()
    numeroMenor.textContent = "El menor numero es " + obtenerMenorNumero()    
    numeroMayor.textContent = "El mayor numero es " + obtenerMayornumero()
    masFrecuente.textContent = "El numero mas frecuente es " + obtenerNumeroMasFrecuente()
}


function calcularPromedio() {

    let sumatoriaDeNumeros = 0

    for (let i = 0; i < arrayNumeros.length; i++) {
        sumatoriaDeNumeros = sumatoriaDeNumeros + arrayNumeros[i]
    }

    let promedio = sumatoriaDeNumeros / arrayNumeros.length

    return promedio
}

function obtenerMenorNumero() {

    let menorNumero = arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (menorNumero > arrayNumeros[i]) {
            menorNumero = arrayNumeros[i]
        }
    }

    return menorNumero
}

function obtenerMayornumero() {

    let mayorNumero = arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (mayorNumero < arrayNumeros[i]) {
            mayorNumero = arrayNumeros[i]
        }
    }

    return mayorNumero
}

function obtenerNumeroMasFrecuente() {

    let numeroMasFrecuente = arrayNumeros[0]
    
    let contador = 0

    for (let i = 0; i < arrayNumeros.length; i++) {
        let contadorDelRepetido = 0

        for (let j = 0; j < arrayNumeros.length; j++) {

            if (arrayNumeros[i] === arrayNumeros[j] && i !== j) {
                
                contadorDelRepetido++

                if(contadorDelRepetido > contador) {
                    
                    contador = contadorDelRepetido
                    
                    numeroMasFrecuente = arrayNumeros[i]

                }

                
            }


        }
    }

    return numeroMasFrecuente
}
