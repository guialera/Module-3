import React from "react"

import Squares from "./Squares"

const colorsArr = ["white", "white", "white", "white"]

const blackArr = ["black", "black", "black", "black"]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            boxColors: colorsArr
        }
        this.blackWhiteChange = this.blackWhiteChange.bind(this)
        this.purpleChange = this.purpleChange.bind(this)
        this.leftBlueChange = this.leftBlueChange.bind(this)
        this.rightBlueChange = this.rightBlueChange.bind(this)
        this.limegreenChange = this.limegreenChange.bind(this)
        this.yellowChange = this.yellowChange.bind(this)
        this.orangeChange = this.orangeChange.bind(this)
        this.randomColorChange = this.randomColorChange.bind(this)
    }

    blackWhiteChange() {
        if (this.state.boxColors[0] === "white") {
            this.setState({
                boxColors: blackArr
            })
        } else if (this.state.boxColors[0] != "white") {
            this.setState({
                boxColors: colorsArr
            })
        }
    }

    purpleChange() {
        this.setState(prevState => {
            return{
            boxColors: ["purple", "purple", prevState.boxColors[2], prevState.boxColors[3]]
            }
        })
    }

    leftBlueChange(){
        this.setState(prevState => {
            return{
                boxColors: [prevState.boxColors[0], prevState.boxColors[1], "blue", prevState.boxColors[3]]
            }
        })
    }

    rightBlueChange(){
        this.setState(prevState => {
            return{
                boxColors: [prevState.boxColors[0], prevState.boxColors[1], prevState.boxColors[2], "blue"]
            }
        })
    }

    limegreenChange(){
        this.setState(prevState => {
            return{
                boxColors: ["limegreen", prevState.boxColors[1], prevState.boxColors[2], prevState.boxColors[3]]
            }
        })
    }

    yellowChange(){
        this.setState(prevState => {
            return{
                boxColors: [prevState.boxColors[0], "yellow", prevState.boxColors[2], prevState.boxColors[3]]
            }
        })
    }

    orangeChange(){
        this.setState(prevState => {
            return{
                boxColors: [prevState.boxColors[0], prevState.boxColors[1], "orange", prevState.boxColors[3]]
            }
        })
    }

    randomColorChange(){
        this.setState(prevState => {
            return{
                boxColors: [prevState.boxColors[0], prevState.boxColors[1], prevState.boxColors[2], "magenta"]
            }
        })
    }

    render() {
        const colors = this.state.boxColors.map(function (color) {
            return (
                <Squares
                    backgroundColor={color}
                />
            )
        }
        )
        return (
            <div>
                <div class="boxContainer">
                    {colors}
                </div>
                <div class="buttonsContainer">
                    <button onClick={this.blackWhiteChange}>DJ Small</button>
                    <button onClick={this.purpleChange}>Party DJ</button>
                    <button onClick={this.leftBlueChange}>Left Blue</button>
                    <button onClick={this.rightBlueChange}>Right Blue</button>
                    <button onClick={this.limegreenChange}>Big DJ One</button>
                    <button onClick={this.yellowChange}>Big DJ Two</button>
                    <button onClick={this.orangeChange}>Big DJ Three</button>
                    <button onClick={this.randomColorChange}>Big DJ Four</button>
                </div>
            </div>
        )
    }
}

export default App