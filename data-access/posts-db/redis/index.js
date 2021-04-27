
const redisClient = require('../../../db/redis/models/post');
const makePost = require('../../../models/post/index') // model

let findPost = (postId) => {
    return redisClient.hgetallAsync(`id:${postId}`);
}

let addPost = (postInfo) => {
    const postMaker = makePost();
    const post = postMaker(postInfo);
    return redisClient.hmsetAsync(post);
}

module.exports = {
    findPost,
    addPost
}