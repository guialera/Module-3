import React from "react"

import Friend from "./Friend"
import list from "./list"

function FriendList() {
    const eachFriendComponent = list.map(function (friend) {
        return (
            <Friend
                name={friend.name}
                age={friend.age}
                pet={friend.pets}
            />
        )

    })

    return (
        <div>
            <h1 className="header">Friends With Pets List</h1>
            {eachFriendComponent}
        </div>
    )
}

export default FriendList