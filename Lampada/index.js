const liga = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')


function verificaQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1
}


function ligarLampada() {
    if(!verificaQuebrada()){
        lamp.src = './imagens/ligada.jpg'
    }
}

function desligarLampada() {
    if(!verificaQuebrada()){
        lamp.src = './imagens/desligada.jpg'
    }
}

function lampadaQuebrada() {
    lamp.src = './imagens/quebrada.jpg'
}

liga.addEventListener('click', ligarLampada)
desligar.addEventListener('click', desligarLampada)
lamp.addEventListener('mouseover', ligarLampada)
lamp.addEventListener('mouseleave', desligarLampada)
lamp.addEventListener('dblclick', lampadaQuebrada)