import React from "react"

import BlogPost from "./BlogPost"

import blogEntires from "./blogEntries"

function BlogList() {
    const blogPostComponents = blogEntires.map(function (entry) {
        return (
            <BlogPost 
            blogTitle={entry.title}
            blogSubTitle={entry.subTitle}
            blogAuthor={entry.author}
            blogDate={entry.date}
            />
        )
    })


    return (
        <div className="blogMainDiv">
            {blogPostComponents}
            <button class="w3-button">Older Posts</button>
        </div>
    )
}

export default BlogList