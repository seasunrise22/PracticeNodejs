const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./server/database/connection')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

/* 포트 설정 */
dotenv.config({path: 'config.env'})
app.set('port', process.env.PORT || 8080)

/* 공통 미들웨어 */
app.use(morgan('dev'))
app.use(cookieParser('secret@1234')) // 암호화 된 쿠키를 사용하기 위한 임의의 문자 전송
app.use(session({
    secret: 'secret@1234', // 암호화
    resave: false, // 새로운 요청 시 세션에 변동 사항이 없어도 다시 저장할지 설정
    saveUninitialized: true, // 세션에 저장할 내용이 없어도 저장할지 설정
    cookie: {
        // 세션 쿠키 옵션들 설정 httpOnly, expires, domain, path, secure, sameSite
        httpOnly: true, // 로그인 구현 시 필수 적용, 자바스크립트로 접근 할 수 없게 하는 기능
    },
    // name: 'connect.sid' // 세션 쿠키의 Name 지정 default가 connect.sid 
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/assets/css'))

/* mongoDB 연결 */
connectDB()

app.set('view engine', 'ejs')

/* 라우팅 설정 */
app.use('/', require('./server/routes/router'))
app.use((req, res, next) => {res.status(404).send('Not Found')})

app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`)
})