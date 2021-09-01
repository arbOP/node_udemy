const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note', argv)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: function() {
        console.log('List of notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    handler: function () {
        console.log('Read the note')
    }
})

// add, remove, read, list



console.log(yargs.argv)