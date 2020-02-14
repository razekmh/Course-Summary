const validator = require('validator')

const log = console.log

const chalk = require('chalk')

const note_func = require('./notes.js')

const printer = note_func()

console.log(printer)

console.log(validator.isURL('http://razekmh.io'))

console.log(chalk.green.inverse('Success!'))



// const add_function = require('./utils')

// const sum = add_function(4, -2)

// console.log(sum)

