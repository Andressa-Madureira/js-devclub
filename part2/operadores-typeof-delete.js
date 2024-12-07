const myObject = {
    name: "Andressa",
    age: 28,
    address: "Rua do Quitandinha"
}

delete myObject.address 

myObject.address = "Rua 10"

console.log(myObject)

console.log(typeof myObject.age)