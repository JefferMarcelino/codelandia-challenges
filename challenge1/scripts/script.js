const main = document.querySelector("main")

fetch("https://blog-api-mz.herokuapp.com/api/v1/blog/posts/")
.then(response => {
    return response.json()
})
.then(data => {
    var posts = data.posts
    posts.forEach(post => {
        const containerPost = document.createElement("section")
        containerPost.setAttribute("class", "container-post")
        main.appendChild(containerPost)

        const top = document.createElement("div")
        top.setAttribute("class", "top")
        containerPost.appendChild(top)

        const date = document.createElement("p")
        date.setAttribute("class", "date")
        var createdAt = post.createdAt
        date.innerHTML = createdAt.slice(0, 10)
        top.appendChild(date)

        const image = document.createElement("img")
        image.setAttribute("src", "./images/favorite.png")
        top.appendChild(image)

        const title = document.createElement("h3")
        title.setAttribute("class", "title")
        title.innerHTML = post.title
        containerPost.appendChild(title)

        const description = document.createElement("p")
        description.setAttribute("class", "description")
        description.innerHTML = post.content
        containerPost.appendChild(description)

        const sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 2000,
            reset: true
        });
        
        ScrollReveal().reveal('.container-post', { delay: 200 });
        ScrollReveal().reveal('.date', { delay: 400 });
        ScrollReveal().reveal('.title', { delay: 500 });
        ScrollReveal().reveal('.description', { delay: 600 });
    });

})
.catch(error => {
    const err = document.createElement("p")
    err.innerHTML = `Failed to request Data. Ops!!!`
    main.appendChild(err)
})