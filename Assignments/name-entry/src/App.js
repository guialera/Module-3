import React from "react"

import NameList from "./NameList"

import listedNames from "./list"

let newList = []

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            people: listedNames
        }

        this.nameInput = this.nameInput.bind(this)
        this.submitName = this.submitName.bind(this)
    }

    nameInput(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })

        /*const { name, value, type } = event.target
        if (type === "text") {
            this.setState({
                [name]: value
            })
        } else if (type === "submit") {
            event.preventDefault()
            const person = value
            this.setState(prevState => {
                let newList = prevState.people
                newList.push(person)
                return {
                    people: newList
                }
            })
        }*/

    }

    submitName(event) {
        event.preventDefault()

        console.log(this.state.people)

        let newPerson = this.state.people
        newList.push(newPerson)

        console.log(newList)

        this.setState({
            people: ""
        })

        /*const person = event.target.people.value
        this.setState(prevState => {
            let newList = prevState.people
            newList.push(person)
            return {
                people: newList
            }
        })
        console.log(this.state.people)*/

    }



    render() {
        const listedNames = newList.map(function (all) {
            return (
                <NameList
                    people={all}
                />
            )
        })
        return (
            <div>
                <form onSubmit={this.submitName}>
                    <input
                        type="text"
                        name="people"
                        placeholder="First and Last Name"
                        value={this.state.people}
                        onChange={this.nameInput}
                    />
                    <input
                        type="submit"
                        value="submit"
                    />
                </form>

                <h1>{this.state.people}</h1>
                <ul>{listedNames}</ul>
            </div>
        )
    }
}

export default App