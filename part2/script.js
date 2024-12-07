
/*
    SetTimeout - > Executa uma vez
    SetInterval -> Executa infinitas vezes
        clearInterval -> É um jeito de parar(Pausar) o setInterval
*/



let number = 0
let cron 
let h1 = document.querySelector("h1")


function start(){
cron = setInterval( function () {
    number++ 
    h1.innerHTML = number
},1000);


}

function stop(){
    clearInterval(cron)
}



/*setTimeout(() => {
    alert("Executei")
}, 3000); //1000 milisegundos -> 1 segundo Ele executa depois do tempo que eu coloquei */