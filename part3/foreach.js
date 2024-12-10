/*

For each(item(e o próprio), index(a posição), array(completo))

o item é obrigatório. o index e array é opcional

*/

const users = [
    {name: 'Andressa', age: 29, contact:'(21) 99565-9856'},
    {name: 'Ana', age: 39, contact:'(21) 99592-9856'},
    {name: 'João', age: 27, contact:'(21) 99565-4556'},
    {name: 'Paulo', age: 59, contact:'(21) 99565-9885'},
]

users.forEach(function(item, index) {
    console.log(`${index + 1}:`)
    console.log(item)
    console.log(`Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});