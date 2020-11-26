import React from "react"

function Pet(props) {
    return (
        <div className="pets">
            <p>Name: {props.name}</p>
            <p>Breed: {props.breeds}</p>
        </div>
    )
}

export default Pet