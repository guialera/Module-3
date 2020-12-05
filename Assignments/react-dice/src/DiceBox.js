import React from "react"

import Die from "./Die"

/* Non Extra Credit

class DiceBox extends React.Component{
    constructor(){
        super()
        this.state={
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
        }
        this.randomNumber = this.randomNumber.bind(this)
    }

    randomNumber(){
        this.setState({
            num1: Math.floor(Math.random()*6),
            num2: Math.floor(Math.random()*6),
            num3: Math.floor(Math.random()*6),
            num4: Math.floor(Math.random()*6),
            num5: Math.floor(Math.random()*6),
        })
    }

    render(){
        return(
            <div>
                <div>
                    <p>{this.state.num1}</p>
                    <p>{this.state.num2}</p>
                    <p>{this.state.num3}</p>
                    <p>{this.state.num4}</p>
                    <p>{this.state.num5}</p>
                </div>
                <div>
                    <button onClick={this.randomNumber}>Press For Random Number!</button>
                </div>
            </div>
        )
    }
}*/

/* Extra Credit*/

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            count: 0,
        }
        this.randomNumber = this.randomNumber.bind(this)
    }

    randomNumber() {
        /*console.log(this.state.count)*/
        let tallyCount = (this.state.count + 1)
        /*console.log(tallyCount)*/
        if (tallyCount < 4) {
            this.setState({
                num1: Math.floor(Math.random() * 6),
                num2: Math.floor(Math.random() * 6),
                num3: Math.floor(Math.random() * 6),
                num4: Math.floor(Math.random() * 6),
                num5: Math.floor(Math.random() * 6),
                count: tallyCount
            })
        } else {
            this.setState({
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                count: 0
            })
            /*console.log("This has been executed!")*/
        }
    }

    render() {
        const numsArr = [this.state.num1, this.state.num2, this.state.num3, this.state.num4, this.state.num5]
        const dieNumber = numsArr.map(function (num) {
            return (
                <Die
                    value={num}
                />
            )
        })

        return (
            <div>
                <h1>Roll The Dice!</h1>
                <div className="dieContainer">
                    {dieNumber}
                </div>
                <div>
                    <button onClick={this.randomNumber}>Press to Roll Dice!</button>
                </div>
            </div>
        )
    }
}

export default DiceBox 