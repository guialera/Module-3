import React from "react"

function Memes(props) {
    return (
        <div>
            <div className="singleMemeContainer">
                <img src={props.choices} width="600" height="600" />
                <p className="topTextSingleMeme">{props.topText}</p>
                <p className="bottomTextSingleMeme">{props.bottomText}</p>
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Memes