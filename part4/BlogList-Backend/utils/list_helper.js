const lodash = require('lodash')

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

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorCounts = lodash.countBy(blogs, 'author')

  const listAuthors = Object.keys(authorCounts).map(author => {
    return {
      author: author,
      blogs: authorCounts[author]
    }
  })

  const topAuthor = lodash.maxBy(listAuthors, 'blogs')

  return topAuthor
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorlikes = lodash.chain(blogs)
    .groupBy('author')
    .map((group, author) => ({
      author: author,
      likes: lodash.sumBy(group, 'likes')
    }))
    .maxBy('likes')
    .value()

  return authorlikes
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}
