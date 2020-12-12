import React from "react"

function Badge(props){
    return(
        <div>
            <p>First Name: {props.data.firstName}</p>
            <p>Last Name: {props.data.lastName}</p>
            <p>Email: {props.data.email}</p>
            <p>Place of Birth: {props.data.placeOfBirth}</p>
            <p>Phone Number: {props.data.phone}</p>
            <p>Favorite Food: {props.data.favFood}</p>
            <p>About Your Self: {props.data.About}</p>
        </div>
    )
}

export default Badge 