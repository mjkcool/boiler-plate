const express = require('express')
const app = express()
const port = 5000
const config = require('./config/hide.json')
const bodyParser = require('body-parser')
const { User } = require('./models/User')

//application/x-www-form-urlencoded 형태의 데이터를 분석하여 가져오는 것을 도와줌
app.use(bodyParser.urlencoded({extended: true}))

//application/json 형태의 데이터 다루기
app.use(bodyParser.json())


const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://mjkcool:${config.mongodb_atlas.user_password}@mysite.44udb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('반가워요')
})

app.post('/register', (req, res) => {
  //회원가입 시 필요한 정보들을 client에서 가져오면 그것들을 DB에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})