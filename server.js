const express = require('express')
const path = require('path')
const app = express()

const port = 3005

app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`I'll be right by your side till ${port}`))
