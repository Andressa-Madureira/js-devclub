const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiValor(){
    console.log("Troca de Valor")
}

function trocaInput(eventInput){
    console.log(eventInput)
}

select.addEventListener("change", troqueiValor)

input.addEventListener("keypress", trocaInput)

button.addEventListener("click", function(clickAqui){
    console.log(clickAqui)
})
   