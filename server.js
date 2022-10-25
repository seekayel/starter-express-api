const express = require('express')

const app = express()

const fs = require('fs')
app.get('/ls', (req,res) => {
  let ls = fs.readdirSync('.')
  res.json(ls)
})

app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(JSON.stringify(process.env,null,2))
    res.send(`Yarn...FTW! => ${new Date().toISOString()}`)
})

app.get('*', (req,res) => {
  res.json({name: 'Silly\'z Computer'}) 
})


app.listen(process.env.PORT || 3000)
