const boardDB = require('../model/model')

// create and save new post
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty'
        })
        return
    }

    // new post
    const post = new boardDB({
        author: req.body.author,
        password: req.body.password,
        title: req.body.title,
        body: req.body.body
    })

    // save post in the database
    post
        .save(post)
        .then(data => {
            res.redirect('/board')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating a create operation'
            })
        })
}

// retrieve and return all posts/ retrieve and return a single posts
exports.find = (req, res) => {
    boardDB.find()
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Error Occurred while retriving post information'
            })
        })
}