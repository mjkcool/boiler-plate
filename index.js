const express = require('express')
const app = express()
const port = 3000
const config = require('./config/hide.json')

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://mjkcool:${config.user_password}@mysite.u6oi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})