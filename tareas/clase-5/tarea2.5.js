let titulo = document.querySelector("h1")
let botonAccion = document.querySelector("#boton-accion")
let primerNombre = document.querySelector("#primer-nombre")
let segundoNombre = document.querySelector("#segundo-nombre")
let apellido = document.querySelector("#apellido")
let edad = document.querySelector("#edad")

botonAccion.onclick = function () {

    capturarDatos()
    mostrarResultado()

}

function capturarDatos() {
    primerNombre = document.querySelector("#primer-nombre").value
    segundoNombre = document.querySelector("#segundo-nombre").value
    apellido = document.querySelector("#apellido").value
    edad = Number(document.querySelector("#edad").value)
}

function mostrarResultado() {
    titulo.textContent = "Bienvenido " + primerNombre

    document.querySelector("#primer-nombre-resultado").textContent = "Tu primer nombre es " + primerNombre
    document.querySelector("#segundo-nombre-resultado").textContent = "Tu segundo nombre es " + segundoNombre
    document.querySelector("#apellido-resultado").textContent = "Tu apellido es " + apellido
    document.querySelector("#edad-resultado").textContent = "Tu edad es " + edad + " años"
}