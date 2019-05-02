const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const mongoDB = process.env.connectionStr
const port = 3005

mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`I'll be right by your side till ${port}`))
