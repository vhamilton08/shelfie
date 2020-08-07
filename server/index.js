require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const app = express()
const {CONNECTION_STRING, SERVER_PORT} = process.env


app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Database is connected')
})

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)

app.listen(SERVER_PORT, () => console.log(`Port running on ${SERVER_PORT}`))