// Object property shorthand
const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'london'
}

console.log(user)

// Object destructuring 

const product = {
    label: 'Red note',
    price: 3,
    stock: 201,
    sales: undefined
}

const {label, stock} = product

console.log(label, stock)