const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes() // load in the notes
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) { // === 0 because it means if length of duplicateNotes aka ZERO exist, then add the note
        notes.push({ // we change the notes if needed
            title: title,
            body: body
        })
        saveNotes(notes) // and we save the notes
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = function (title){
    console.log('Note being removed!')
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}