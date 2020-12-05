import React from "react"

function Die(props){
    return(
        <div className="eachDie">
            <div className="die">
                {props.value} 
            </div>
            <input type="checkbox"></input><p>Check To Not Roll Die Again</p>
        </div>
        
    )
}

export default Die