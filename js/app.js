let box = document.querySelector('#box')

const obtainAttribute = document.querySelector('#obtain')
obtainAttribute.addEventListener('click', () => {

    // Obtenemos el atributo del elemento
    const message = document.querySelector("#message")
    message.innerHTML = `El nombre del atributo ID de este elemento es: ${box.getAttribute('id')}`

})

//colocamos un atributo dinamicamente
const settingAttribute = document.querySelector('#place')
settingAttribute.addEventListener('click', () => {

    const box = document.querySelector('#box')
    box.setAttribute('class', 'styles')

    message.innerHTML = `Se han cambiado los estilos iniciales del atributo class`


})

//Removemos un atributo dinamicamente
const remAttribute = document.querySelector('#remove')
remAttribute.addEventListener('click', () => {

    box = document.querySelector('#box')
    box.removeAttribute('class')

    message.innerHTML = `Se han removido los estilos del atributo class`
})

//Verificamos si un elemento tiene el atributo especificado 
const viewAttribute = document.querySelector('#has')
viewAttribute.addEventListener('click', () => {

    message = document.querySelector("#message")
    message.innerHTML = `El elemento si contiene el atributo class porque su valor es: ${box.hasAttribute('class')}`




})

