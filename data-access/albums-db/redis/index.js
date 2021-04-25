
let makeAlbum = require('../../../models/album/index') // model

let addAlbum = (albumInfo) => {
    let album = makeAlbum()(albumInfo)
    let newAlbum = {
        title: album.getTitle(),
        name: album.getName()
    }
    // return album.create(newAlbum)
    //   .then(serialize)
}

module.exports = {
    addAlbum
}