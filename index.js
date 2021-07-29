const express = require('express')
const app = express()
const port = 3000

mongodb+srv://mjkcool:<password>@mysite.u6oi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})