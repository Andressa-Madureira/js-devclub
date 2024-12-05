/*

&& -> E -> PESSOA EXIGENTE
true && true = true
false && true = false
false && false = false

|| -> Ou -> Tanto faz

    true || true = true
    true  || false = true
    false || false = false


 ! -> Negação

    !false = true
    !true = false
*/
console.log(false || false || false)

console.log(true && true && true)

console.log(!false)


const digitarSenha = false
const digitarToken = true
const numeroDaConta = true

if( digitarSenha || digitarToken || numeroDaConta){
    console.log("Logado com sucesso")
}else("Autenticação Falhou")

