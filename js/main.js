const toggle = document.getElementById("toggle")
const body = document.querySelector("body")
const indicator = document.getElementById("switch")
const texto = document.getElementById("text")



toggle.onclick =() =>{
    toggle.classList.toggle("active")
    body.classList.toggle("active")
    texto.classList.toggle("active")
}