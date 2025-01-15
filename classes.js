class Person {
    name;
    age;
    adress;

    talk(){
        console.log(`Olá! Meu nome é ${this.name} e tenho ${this.age} anos. Meu endereço atual é ${this.adress}`)
    }
}

const newPerson = new Person()
newPerson.name = "Andressa"
newPerson.age = 28
newPerson.adress = "Rua 123456"

newPerson.talk()