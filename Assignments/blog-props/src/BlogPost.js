import React from "react"

function BlogPost(props){
    return(
        <div>
            <p className="title">{props.blogTitle}</p>
            <p className="subTitle">{props.blogSubTitle}</p>
            <p className="postDate">Posted by {props.blogAuthor} on {props.blogDate}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost