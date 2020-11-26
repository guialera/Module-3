import React from "react"

import Pet from "./Pet"

function Friend(props) {
    const petArr = props.pet
    const eachPetComponent = petArr.map(function (each) {
        return (
            <Pet
                name={each.name}
                breeds={each.breed}
            />
        )
    })
    return (
        <div className="friendDiv">
            <p className="name">{props.name}</p>
            <p className="age">Age: {props.age}</p>
            <p className="petsHeader">Pets</p>
            {eachPetComponent}
        </div>
    )
}

export default Friend