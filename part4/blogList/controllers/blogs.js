const blogsRouter = require('express').Router()
const Blog = require('./../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs)
    }) 
})


blogsRouter.post('/', (request, response, next) => {
    const body = request.body

    const blog = new Blog({
        author: body.author,
        title: body.title,
        url: body.url,
        upvotes: body.upvotes || 0
    })

    blog.save()
        .then(result => {
            response.json(result)
        })
        .catch(error => next(error))
        
})

module.exports = blogsRouter