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
    for (let i = 0; i < contacts.length; i++) {
       
  
    if (input.value.toLowerCase() === contacts[i].name.toLowerCase()){
        p.innerHTML = `Contato encontrado -Nome: ${contacts[i].name} Tel: ${contacts[i].number}`
          break  
        } else{
            p.innerHTML = "Contato não encontrado. Tente novamente"
        }
    }
}
    
    



