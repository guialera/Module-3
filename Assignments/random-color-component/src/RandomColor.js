import React from "react"

function RandomColor(props) {
    let color = props.choices
    return (
        <div style={{
            backgroundColor: color,
            fontSize: "40px",
            textAlign: "center"
        }}>
            THESE ARE SET COLORS!
        </div>
    )
}

export default RandomColor