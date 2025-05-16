const _ = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum += blog.likes, 0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return []
  }
  const maxLikes = Math.max(...blogs.map(blog => blog.likes))
  const favourite = blogs.filter(blog => blog.likes === maxLikes)

  return favourite
}

const authors = (blogs) => {
  return _.groupBy(blogs, 'author')
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  authors,
}