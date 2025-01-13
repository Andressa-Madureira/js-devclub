const user = [
{
      "matricula": "A123",
      "nome": "Laura Costa",
      "cargo": "Analista de Sistemas",
      "salario": 4500.00,
      "contratacao": "2020-03-15"
    },
    {
      "matricula": "B456",
      "nome": "Pedro Mendes",
      "cargo": "Desenvolvedor Front-end",
      "salario": 5000.00,
      "contratacao": "2022-06-01"
    },
    {
      "matricula": "C789",
      "nome": "Ana Rocha",
      "cargo": "Designer UX",
      "salario": 4200.00,
      "contratacao": "2019-08-20"
    }
  ]
  
console.log(user)

const userJson = JSON.stringify(user) // converte para JSON
console.log(userJson)

const userJs = JSON.parse(userJson)
console.log(userJs)

