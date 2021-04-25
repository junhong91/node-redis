let buildMakeAlbum = function() {
  return ({
    title,
    name
  } = {}) => {
    return {
      getTitle: () => title,
      getName: () => name
    }
  }
}

module.exports = buildMakeAlbum