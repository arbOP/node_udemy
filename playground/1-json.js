const fs = require('fs')

// this is code below to change properties 

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Arbnor'
user.age = 28

const nameJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', nameJSON)