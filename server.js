const express = require('express')

const app = express()
app.use(express.json())

const fs = require('fs')
app.get('/ls', (req,res) => {
  let ls = fs.readdirSync('.')
  res.json(ls)
})

app.all('/echo', (req, res) => {
    console.log("Just got a request!")
    console.log(JSON.stringify(process.env,null,2))
    res.send(`Yarn...FTW! => ${new Date().toISOString()}`)
})

app.all('*', (req,res) => {
  console.log(JSON.stringify(req.body,null,2))
  res.send('Ok')
})


app.listen(process.env.PORT || 3000, "127.0.0.1")
