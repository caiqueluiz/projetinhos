const hora = document.querySelector('#hora')
const minuto = document.querySelector('#minuto')
const segundo = document.querySelector('#segundo')

setInterval(() => {
    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    hora.innerHTML = `${formatTime(horas)}`
    minuto.innerHTML = `${formatTime(minutos)}`
    segundo.innerHTML = `${formatTime(segundos)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? "0" + time : time 
}