const express = require('express')
const app = express()
const port = 4000
const path = require('path')

app.use('/', express.static(path.join(__dirname, '../client')))
app.use(express.json());
app.use(express.urlencoded());

var validKeys = [
    "9xxq9I8ke8LyIVKE",
    "rd2pVlK70cd1rqBO",
    "7gdXx2LJbKKlwy1y"
]


app.get('/validate', (req, res) => {
    console.log("this is what we got from the client",req.query)
    if(validKeys.includes(req.query.key)){
        res.send('Step 2')
    }else{
        res.send('No eres digno, Alejate!')
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})