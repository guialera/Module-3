import React from "react"

function Person(props) {
    return (
        <div className="personContainer">
            <img src={props.hit.image} />
            <div className="text">
                {props.hit.name}
            </div>
        </div>
    )
}

export default Person