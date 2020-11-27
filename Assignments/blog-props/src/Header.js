import React from "react"

import NavBar from "./NavBar"

function Header(){
    return(
        <div className="header">
            <NavBar />
            <h1 className="headerOne">Clean Blog</h1>
            <p className="underHeader">A Blog Theme by Start Bootstrap</p>
        </div>
    )
}

export default Header