import React from "react"

function NavBar(){
    return(
        <nav className="navBar">
            <li className="floatLeft">Start Bootstrap</li>
            <div className="floatRight">
                <li>Home</li>
                <li>About</li>
                <li>Sample Post</li>
                <li>Contact</li>
            </div>
        </nav>
    )
}

export default NavBar