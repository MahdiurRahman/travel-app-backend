const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

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