const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const total = blogs.reduce((sum, blog) => {
    return sum + blog.likes
  }, 0)

  return total
}

const favouriteBLog = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return null
  }

  const mostFavourite = blogs.reduce((currentFavorite, currentBlog) => {
    if (currentFavorite.likes < currentBlog.likes) {
      return currentBlog
    } else {
      return currentFavorite
    }
  }, blogs[0])

  return mostFavourite
}

module.exports = { dummy, totalLikes, favouriteBLog } 
