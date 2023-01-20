const axios = require('axios')

exports.homeRoutes = (req, res) => {
    res.render('index')
}
exports.board = (req, res) => {
    // Make a get request to /api/post
    axios.get('http://localhost:3000/api/post')
        .then((response) => {
            res.render('board', {
                posts: response.data
            })
        })
        .catch(err => {
            res.send(err)
        })
}
exports.show_post = (req, res) => {
    res.render('show_post')
}
exports.add_post = (req, res) => {
    res.render('add_post')
}