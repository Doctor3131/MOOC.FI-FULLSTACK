const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let a = 0

    blogs.forEach(blog => {
        a += blog.likes
    })

    return a
}

const favouriteBlog = (blogs) => {
    let likeTemp = 0
    let blogTemp = []

    blogs.forEach(blog => {
        if (likeTemp < blog.likes) {
            likeTemp = blog.likes
            blogTemp = []
            blogTemp.push(blog)
        } else if (likeTemp === blog.likes) {
            likeTemp = blog.likes
            blogTemp.push(blog)
        }
    })
    return blogTemp

}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}