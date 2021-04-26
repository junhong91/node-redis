let buildMakePost = function() {
  return ({
    id,
    contents,
    poster
  } = {}) => {
    return [
      `id:${id}`,
      'contents',
      contents,
      'poster',
      poster
    ]
  }
}

module.exports = buildMakePost