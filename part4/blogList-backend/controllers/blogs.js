const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// blogsRouter.get('/', (request, response) => {
//   Blog.find({}).then((blogs) => {
//     response.json(blogs)
//   })
// })

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})

  response.json(blogs)
})


// blogsRouter.post('/', (request, response) => {
//   const blog = new Blog(request.body)
//
//   blog.save().then((result) => {
//     response.status(201).json(result)
//   })
// })

blogsRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.author || !body.title) {
    return response.status(400).end()
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  })

  const savedBlog = await blog.save()
  if (savedBlog) {
    response.status(201).json(savedBlog)
  } else {
    response.status(400)
  }
})

module.exports = blogsRouter
