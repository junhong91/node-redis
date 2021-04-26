let postsDb = require('../data-access/posts-db')

let posts = module.exports = {}

posts.show = (req, res, next) => {
    postsDb.findPost(req.params.id)
      .then(data => {
          res.send(data)
      })
}

posts.create = (req, res, next) => {
    postsDb.addPost(req.body)
      .then(data => {
          res.send(data)
      })
      .catch(next)
}