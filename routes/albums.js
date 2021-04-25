let albumsDb = require('../data-access/albums-db')

let albums = module.exports = {}

albums.create = (req, res, next) => {
    albumsDb.addAlbum(req.body)
    //   .then(data => {
    //       res.send(data)
    //   })
    //   .catch(next)
    res.send('Hello world!')
}