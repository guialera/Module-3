import React from "react"

import Person from "./Person"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            names: []
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    names: data
                })
            })
    }

    render() {
        let people = this.state.names
        const list = people.map(function (each) {
            return (
                <Person
                    hit={each}
                />
            )
        })
        return (
            <div>
                <h1>This Is Don Corleone's Hit List!</h1>
                <div className="listContainer">
                    {list}
                </div>
            </div>
        )
    }

}

export default App