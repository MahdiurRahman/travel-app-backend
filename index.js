const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email)    
)
const app = express()

const PORT = process.env.PORT || 5000

// fake users
const users = []

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(flash())
app.use(session({
    
}))


const configureApp = async () => {
    app.get('/', (req, res) => {
        res.send("Welcome to main page")
    })
    
    app.get('/hello', (req, res) => {
        res.send("HELLOOOOOOOO")
    })
}

const startListening = async () => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
}

const bootApp = async () => {
    await configureApp()
    await startListening()
}

bootApp()