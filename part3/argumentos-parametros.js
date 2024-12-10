/*
Functions / Funções
    Trecho de código que é executado
    SOMENTE quando solicitado (Parente gente boa)
*/

const variavel = "aula"

console.log(variavel)

function NomeNaTela(){
    console.log("Andressa")
}

NomeNaTela()


function sayMyname(name){
    console.log(`O nome é: ${name}`)
}
sayMyname("João")
sayMyname("João")
sayMyname("João")
sayMyname("João")

function sum(value, value2){
    console.log(value + value2)
}

sum(20,22)
sum(15,65)

/*
sub
div
multi
*/

function multi (value1, value2){
    console.log( value1 * value2)
}

multi(8,8)

function sayName(name = "Andressa"){
    console.log(name)
}

sayName()