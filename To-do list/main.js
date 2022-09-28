const tarefaCampo = document.querySelector('.tarefa-input')
const adicionar = document.querySelector('.tarefa-container-button')
const containerTarefa = document.querySelector('.container-tarefa')




adicionar.addEventListener('click', ()=>{
    const containerNovaTarefa = document.createElement('div')
    containerNovaTarefa.classList.add('container-nova-tarefa')

    const tarefa = document.createElement('p')
    tarefa.innerText = tarefaCampo.value

    tarefa.addEventListener('click', ()=> {
        tarefa.classList.toggle('completed')
    })

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('far')
    deleteItem.classList.add('fa-trash-alt')
    
    deleteItem.addEventListener('click', ()=> {
        containerNovaTarefa.remove()
    })

    containerNovaTarefa.appendChild(tarefa)
    containerNovaTarefa.appendChild(deleteItem)
    containerTarefa.appendChild(containerNovaTarefa)

    tarefaCampo.value = ''
})
