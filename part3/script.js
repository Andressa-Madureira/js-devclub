let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    {name:'Andressa' , number:'(28)98563-0000'},
    {name:'Beatriz' , number:'(89)97545-0000'},
    {name:'Carla' , number:'(21)99999-0000'},
    {name:'Joao' , number:'(21)98888-3232'},
    {name:'Paulo' , number:'(21)98698-0000'},
]

function buscar(){
    for (const contact of contacts) {
       
  
    if (input.value.toLowerCase() === contact.name.toLowerCase()){
        p.innerHTML = `Contato encontrado -Nome: ${contact.name} Tel: ${contact.number}`
          break  
        } else{
            p.innerHTML = "Contato não encontrado. Tente novamente"
        }
    }
}
    
    



