const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(JSON.stringify(process.env,null,2))
    res.send(`Yo! => ${new Date().toISOString()}`)
})
app.listen(process.env.PORT || 3000)
