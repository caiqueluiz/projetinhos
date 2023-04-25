function loadpk() {
    let randomId = () => Math.floor(Math.random() * 904)
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(`${url}${randomId()}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById('nome').innerHTML = data.name
            document.getElementById('numero').innerHTML = data.id
            let img = data.sprites.front_default
            document.getElementById('pic').setAttribute('src', img) 
        })
        .catch((Error) => {
            console.log('erro:' + Error)
        })
}

document.getElementById('btn1').onclick = loadpk