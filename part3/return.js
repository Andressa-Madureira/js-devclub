/*
Função void(vazia), não retorna nada.
Função return, retorna um valor para quem chamou a função
*/

function sum(value, value2) { //vazio
    console.log(value + value2)
}

function sub(value, value2) {
    const result = value - value2
    return result //é sempre a última coisa que devemos colocar na função. A função para no return
}



const myresult = sub(10, 20)
console.log(`${myresult}: resultado subtração`)


/*

Calcula desconto
Todos od produtos acima de R$30,00 tem desconto de 10%
*/




const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValueWithDiscount = 0

function calculateDiscount(price, discount) {
    const result = price * discount / 100
    return result
    
}


cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)
    } else {
        finalValueWithDiscount += value
    }

    
});

console.log(`O valor final da compra foi de  , porém você teve o desconto e irá pagar apenas o valor de ${finalValueWithDiscount.toFixed(2)}. Você economizou`
)
