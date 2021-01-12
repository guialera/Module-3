import React from "react"

function Memes(props) {
    return (
        <div>
            <img src={props.choices} width="600" height="600" />
            <p>Top Text: </p>
            <p>Bottom Text: </p>
            <button>Edit</button>
        </div>
    )
}

export default Memes