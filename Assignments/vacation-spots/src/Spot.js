import React from "react"

function Spot(props) {
    if (props.time === "Fall") {
        var styles = {
            backgroundColor: "#FA8F04"
        }
    } else if (props.time === "Winter") {
        var styles = {
            backgroundColor: "white"
        }
    } else if (props.time === "Spring") {
        var styles = {
            backgroundColor: "limegreen"
        }
    } else if (props.time === "Summer") {
        var styles = {
            backgroundColor: "yellow"
        }
    }

    if (props.price < 500){
    return (
        <div style={styles} className="eachSpot">
            <h2 className="spotDestination">Destination: {props.destination}</h2>
            <p className="spotPrice">Price: ${props.price}</p>
        </div>
    )
    } else if (props.price < 1000){
        return(
            <div style={styles} className="eachSpot">
            <h2 className="spotDestination">Destination: {props.destination}</h2>
            <p className="spotPrice">Price: $${props.price}</p>
        </div>
        )
    } else if (props.price > 1000){
        return(
            <div style={styles} className="eachSpot">
            <h2 className="spotDestination">Destination: {props.destination}</h2>
            <p className="spotPrice">Price: $$${props.price}</p>
        </div>
        )
    }
}

export default Spot