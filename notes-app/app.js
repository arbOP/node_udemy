const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Task instruction',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },   
    handler: function () {
        notes.removeNote(argv.title)
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

yargs.parse()