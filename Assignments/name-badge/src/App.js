import React from "react"

import Badge from "./Badge"

let allBadges = []

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            /*person: {
                firstName: "",
                lastName: "",
                email: "",
                plceOfBirth: "",
                phone: 0,
                favFood: "",
                About: ""
            }*/
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            About: "",
            badgeArr: []
        }

        this.submitInfo = this.submitInfo.bind(this)
        this.fillIn = this.fillIn.bind(this)
    }

    fillIn(event) {
        console.log("This is working!")
        const { name, value } = event.target

        this.setState({
            /*person: {
                [name]: value
            }*/
            /*person: {
                [name]: value,
                [name]: value,
                [name]: value,
                [name]: value,
                [name]: value,
                [name]: value,
                [name]: value
            }*/

            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value
        })
    }

    submitInfo(event) {
        event.preventDefault()
        console.log("This Works")
        console.log(this.state)

        /*let eachBadge = this.state
        allBadges.push(eachBadge)*/

        let eachBadge =
        {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favFood: this.state.favFood,
            About: this.state.About
        }

        allBadges.push(eachBadge)

        /*const { name, value } = event.target*/
        this.setState({
            /*person: {
                [name]: value
            }*/

            /*[name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value*/

            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            About: "",
            badgeArr: allBadges
        })

    }

    render() {
        const list = this.state.badgeArr
        const people = list.map(function (each) {
            return (
                <Badge
                    data={each}
                />
            )
        })
        return (
            <div>
                <form onSubmit={this.submitInfo}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.fillIn}
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.fillIn}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.fillIn}
                    />

                    <input
                        type="text"
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                        value={this.state.placeOfBirth}
                        onChange={this.fillIn}
                    />

                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.fillIn}
                    />

                    <input
                        type="text"
                        name="favFood"
                        placeholder="Favorite Food"
                        value={this.state.favFood}
                        onChange={this.fillIn}
                    />

                    <textarea
                        type="text"
                        name="About"
                        placeholder="About Yourself"
                        value={this.state.About}
                        onChange={this.fillIn}
                    />

                    <input
                        type="submit"
                        value="Submit Information"
                    />
                </form>
                {people}
            </div>
        )
    }
}

export default App