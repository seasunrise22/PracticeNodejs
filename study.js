const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
    const output = `
    <h2>express로 웹 만들기</h2>
    `
    res.send(output)
})

app.get('/user/:id', (req, res) => {
    res.send(req.params.id + '님의 개인 페이지 입니다.')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 실행 중...')
})