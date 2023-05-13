const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

setInterval(() => {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    horas.innerHTML = `${formatTime(hr)}`
    minutos.innerHTML = `${formatTime(min)}`
    segundos.innerHTML = `${formatTime(sec)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? "0" + time : time 
}