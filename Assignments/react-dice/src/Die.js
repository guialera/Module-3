import React from "react"

function Die(props) {
    return (
        <div className="eachDie">
            <div className="die">
                {props.value}
            </div>
            <input type="checkbox" name={props.id} checked={props.pressed} onChange={() => props.selected(props.id)}></input><p>Check To Not Roll Die Again</p>
        </div>

    )
}

export default Die