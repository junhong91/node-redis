let {
    findPost,
    addPost
}
= require('./redis/index')

let postsDb = {
    findPost,
    addPost
}

module.exports = postsDb