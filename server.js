const express = require('express')
const fs = require('fs')

const app = express()

app.get('/ls', (req,res) => {
  let ls = fs.readdirSync('.')
  res.json(ls)
})

app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(JSON.stringify(process.env,null,2))
    res.send(`Yo! => ${new Date().toISOString()}`)
})
app.listen(process.env.PORT || 3000)
