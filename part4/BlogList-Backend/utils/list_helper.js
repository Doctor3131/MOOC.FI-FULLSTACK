const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const favorite = blogs.reduce((favorite, blog) => {
    if (blog.likes > favorite.likes) {
      return blog
    }
    return favorite
  }, blogs[0])

  return favorite
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}
