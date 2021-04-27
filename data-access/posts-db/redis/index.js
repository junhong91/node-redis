
const redisClient = require('../../../db/redis/client');
const makePost = require('../../../models/post/index');

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