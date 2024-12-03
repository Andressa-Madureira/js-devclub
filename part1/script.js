const element = document.querySelector('.paragraph-js')
const input = document.querySelector('#main-input')

function cliqueiNoBotao(){  //evento de clicar no botão
    element.textContent = `${input.value}, seja bem vindo(a)! Aqui você vai aprender sobre Javascript!`
    alert(`Olá, ${input.value}!`)
    element.style.color = "red"
}




