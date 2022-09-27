pizzaJson.map((item, index) => {
    const pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault()

        let key = e.target.closest('.pizza-item').getAttribute('data-key')

        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description

        document.querySelector('.pizzaWindowArea').style.opacity = 0
        document.querySelector('.pizzaWindowArea').style.display = 'flex'
        setTimeout(()=> {
            document.querySelector('.pizzaWindowArea').style.opacity = 1
        },200 )
        
    })

    document.querySelector('.pizza-area').append(pizzaItem)
})

