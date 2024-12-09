const users = {
    name: 'Andressa',
    age: 28,
    street: 'Rua 42'
}

for (const key in users) {
        console.log(`${key} : ${users[key]}`)
}