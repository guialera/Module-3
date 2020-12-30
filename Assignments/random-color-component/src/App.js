import React from "react"

import RandomColor from "./RandomColor"

import axios from "axios"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["fuchsia", "greenyellow", "deeppink", "peachpuff"],
            color: []
        }
    }

    componentDidMount() {
        axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then((response) => {
            this.setState({
                color: response.data
            })
            /*console.log(response.data)*/
            console.log(this.state.color.new_color)
        })
    }

    render() {
        let updatedColor = this.state.color.new_color
        let color = this.state.colors
        const setColor = color.map(function (each) {
            return (
                <RandomColor
                    choices={each}
                />
            )
        })
        return (
            <div>
                {setColor}
                <div style={{
                    backgroundColor: `#${updatedColor}`,
                    fontSize: "40px",
                    textAlign: "center"
                }}>
                    THIS IS A RANDOM NEW COLOR!
                </div>
            </div>
        )
    }

}

export default App