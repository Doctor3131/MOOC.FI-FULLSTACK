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

module.exports = {
    dummy,
    totalLikes
}