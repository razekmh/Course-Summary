const fs = require('fs')

// const book = { 
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON.title)

// const pasedData = JSON.parse(bookJSON)
// console.log(pasedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Mahmoud"
data.age = 30 
const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)
