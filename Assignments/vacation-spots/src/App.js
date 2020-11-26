import React from "react"

import Spot from "./Spot"

import vacationSpot from "./vacationSpots"

import Time from "./Time"

function App(){
    const vacationComponents = vacationSpot.map(function(spots){
        return(
        <Spot 
         destination = {spots.place} 
         price = {spots.price}
         time = {spots.timeToGo}
         />
        )
    })

    return(
        <div className="vacationDiv">
            <Time />
            {vacationComponents}
        </div>
    )
}

export default App