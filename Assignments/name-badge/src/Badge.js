import React from "react"

function Badge(props) {
    return (
        <div className="badgeDiv">
            <h1 className="badgeName">Hello My Name Is</h1>
            <p className="badgeFirstName">First Name: {props.data.firstName}</p>
            <p className="badgeLastName">Last Name: {props.data.lastName}</p>
            <p className="badgeEmail">Email: {props.data.email}</p>
            <p className="badgePlaceOfBirth">Place of Birth: {props.data.placeOfBirth}</p>
            <p className="badgePhone">Phone Number: {props.data.phone}</p>
            <p className="badgeFavFood">Favorite Food: {props.data.favFood}</p>
            <p className="badgeAbout">About Your Self: {props.data.About}</p>
        </div>
    )
}

export default Badge 