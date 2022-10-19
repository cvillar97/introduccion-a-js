
let botonAgregar = document.querySelector("#agregar")
let botonCalcular = document.querySelector("#calcular")
let botonReiniciar = document.querySelector("#reiniciar")

let resultado = document.querySelector("#resultado")

let arrayHoras = []
let arrayMinutos = []
let arraySegundos = []

let sumatoriaDeHoras = 0
let sumatoriaDeMinutos = 0
let sumatoriaDeSegundos = 0

let horasTotales = 0
let minutosTotales = 0
let segundosTotales = 0

botonAgregar.onclick = function () {

    let horas = Number(document.querySelector("#horas").value)
    let minutos = Number(document.querySelector("#minutos").value)
    let segundos = Number(document.querySelector("#segundos").value)

    agregarTiempos(horas, minutos, segundos)

    console.log(
        arrayHoras,
        arrayMinutos,
        arraySegundos
    )


}



botonCalcular.onclick = function () {


    if (arrayHoras.length > 0 ||
        arrayMinutos.length > 0 ||
        arraySegundos.length > 0) {

        sumarHoras()
        sumarMinutos()
        sumarSegundos()
        convertirAHoras()
        calcularTiempos()

        mostrarResultados()


    } else {
        alert("Ingrese al menos 1 valor")
    }
}

botonReiniciar.onclick = function () {
    arrayHoras = []
    arrayMinutos = []
    arraySegundos = []

    sumatoriaDeHoras = 0
    sumatoriaDeMinutos = 0
    sumatoriaDeSegundos = 0

    horasTotales = 0
    minutosTotales = 0
    segundosTotales = 0

    resultado.textContent = ""
}

function mostrarResultados() {
    resultado.textContent = "El tiempo total es de " + horasTotales + " horas " + minutosTotales + " minutos y "
        + segundosTotales + " segundos"
}

function convertirAHoras() {

    const minutosEnUnaHora = 60
    const segundosEnUnaHora = 3600
    sumatoriaDeHoras = sumatoriaDeHoras + (sumatoriaDeMinutos / minutosEnUnaHora) + (sumatoriaDeSegundos / segundosEnUnaHora)
}

function calcularTiempos() {
    obtenerHoras()
    obtenerMinutos()
}

function obtenerHoras() {

    horasTotales = sumatoriaDeHoras - (sumatoriaDeHoras - Math.trunc(sumatoriaDeHoras))

}

function obtenerMinutos() {
    let horasDecimales = sumatoriaDeHoras - Math.trunc(sumatoriaDeHoras)
    minutosTotales = 60 * horasDecimales
    let minutosDecimales = minutosTotales - Math.trunc(minutosTotales)
    minutosTotales = minutosTotales - minutosDecimales
    obtenerSegundos(minutosDecimales)

}

function obtenerSegundos(minutosDecimales) {
    segundosTotales = Math.trunc(minutosDecimales * 60)
}

function sumarHoras() {

    for (let i = 0; i < arrayHoras.length; i++) {
        sumatoriaDeHoras = sumatoriaDeHoras + arrayHoras[i]
    }
}

function sumarMinutos() {

    for (let i = 0; i < arrayMinutos.length; i++) {
        sumatoriaDeMinutos = sumatoriaDeMinutos + arrayMinutos[i]
    }
}

function sumarSegundos() {

    for (let i = 0; i < arraySegundos.length; i++) {
        sumatoriaDeSegundos = sumatoriaDeSegundos + arraySegundos[i]
    }
}


function agregarTiempos(a, b, c) {
    agregarHoras(a)
    agregarMinutos(b)
    agregarSegundos(c)

}

function agregarHoras(x) {
    if (x > 0) {
        arrayHoras.push(x)
    }
}

function agregarMinutos(x) {
    if (x > 0) {
        arrayMinutos.push(x)
    }
}

function agregarSegundos(x) {
    if (x > 0) {
        arraySegundos.push(x)
    }
}