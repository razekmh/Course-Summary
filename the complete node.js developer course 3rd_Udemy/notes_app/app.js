const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    bulider: {
        title: {
            describe: 'Note title',
            demandOption: true
        }
    },
    handler : function (argv) {
        console.log('Adding a new note!', argv)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler : function () {
        console.log('Removing the note!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler : function () {
        console.log('Reading the note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler : function () {
        console.log('Listing all the notes!')
    }
})
console.log(yargs.argv)