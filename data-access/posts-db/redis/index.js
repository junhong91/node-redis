
const redisClient = require('../../../db/redis/models/post');
const makePost = require('../../../models/post/index') // model

let findPost = async (postId) => {
    return await redisClient.hgetallAsync(`id:${postId}`);
}

let addPost = async (postInfo) => {
    const postMaker = makePost();
    const post = postMaker(postInfo);
    await redisClient.hmsetAsync(post);
    return await redisClient.hgetallAsync(`id:${post['id']}`);
}

module.exports = {
    findPost,
    addPost
}