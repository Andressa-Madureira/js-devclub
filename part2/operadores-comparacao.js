const firstNumber = 30
const secondNumber = 40
if(firstNumber == secondNumber){ //Compara o valor, mas não o tipo
    console.log("Os dois valores são iguais")
}else{
    console.log("Os valores são diferentes")
}
const result = firstNumber === secondNumber //Compara o valor e o tipo
console.log(result)


const Number1 = 49
const Number2 = "49"
if(Number1 != Number2){ //o Number1 é diferente de Number2. Compara o valor, mas não o tipo da variável
    console.log("Sim, são diferentes")
}else{
    console.log("Não, não são diferentes")
}
const res = Number1 !== Number2 // Compara o valor e o tipo
console.log(res)

