const express = require('express')

const endpoints = require('./endpoints/endpoints')

const app = express()
endpoints(app)

const port = 3000
app.listen(port,err=>{
    if (err) return console.warn(err);
    console.log(`http://localhost:${port}`)
})