function buscarCep() {

    const cep = document.getElementById('buscarCep').value     
    const url = `https://viacep.com.br/ws/${cep}/json/` 
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('cep').textContent = data.cep
        document.getElementById('rua').textContent = data.logradouro
        document.getElementById('bairro').textContent = data.bairro
        document.getElementById('cidade').textContent = data.localidade;
        document.getElementById('estado').textContent = data.uf
    })
    

}