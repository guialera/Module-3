import React from "react"

import Die from "./Die"

import numbersArr from "./numbers"

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

/*
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
        /*console.log(this.state.count)//
        let tallyCount = (this.state.count + 1)
        /*console.log(tallyCount)//
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
            /*console.log("This has been executed!")//
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

export default DiceBox */

//Updated Extra Credit//

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            numbers: numbersArr,
            count: 0
        }

        /*{
            num1: { value: 0, checked: false },
            num2: { value: 0, checked: false },
            num3: { value: 0, checked: false },
            num4: { value: 0, checked: false },
            num5: { value: 0, checked: false },
            count: 0,
        }*/
        this.randomNumber = this.randomNumber.bind(this)
        this.checked = this.checked.bind(this)
    }

    checked(id) {
        /*console.log(id)*/
        /*console.log(this.state.numbers)*/
        /*const markedArr = this.state.numbers.map(function (each) {
            if (each.id === id) {
                return{
                    ...each,
                    checked: !each.checked
                }
                /*each.checked = !each.checked//
            } return each
        })

        this.setState({
            numbers: markedArr
        })*/

        this.setState(prevState =>{
            const checkedValue = prevState.numbers.map(function (each) {
                if (each.id === id) {
                    return{
                        ...each,
                        checked: !each.checked
                    }
                    /*each.checked = !each.checked*/  
                }
                return each
            })
            return {
                numbers: checkedValue
            }
        })

        /*if (id === 1) {
            console.log("this works also")
            this.setState({
                num1: { value: this.state.num1.value, checked: !this.state.num1.checked }
            })
            console.log(this.state)
        } else if (id === 2) {
            console.log("this works 2")
            this.setState({
                num2: { value: this.state.num2.value, checked: !this.state.num2.checked }
            })
        } else if (id === 3) {
            this.setState({
                num3: { value: this.state.num3.value, checked: !this.state.num3.checked }
            })
        } else if (id === 4) {
            this.setState({
                num4: { value: this.state.num4.value, checked: !this.state.num4.checked }
            })
        } else if (id === 5) {
            console.log("this works 5!")
            this.setState({
                num5: { value: this.state.num5.value, checked: !this.state.num5.checked }
            })
        }*/
    }

    /*status() {
        console.log(this.state.num1)
    }*/

    randomNumber() {
        /*console.log(this.state.count)*/
        let tallyCount = (this.state.count + 1)
        /*console.log(tallyCount)*/
        /*console.log(this.state.numbers)*/
        const originalNumbersArr = [
            { id: "num1", value: 0, checked: false },
            { id: "num2", value: 0, checked: false },
            { id: "num3", value: 0, checked: false },
            { id: "num4", value: 0, checked: false },
            { id: "num5", value: 0, checked: false },
        ]
        if (tallyCount < 4) {
            /*console.log("if statement works")*/
            this.setState(prevState => {
                const updatedNumbersArr = prevState.numbers.map(function (single) {
                    if (single.checked === false) {
                        return{
                            ...single,
                            value: Math.floor(Math.random() * 6) 
                        }
                        /*single.value = Math.floor(Math.random() * 6)*/
                    } else if (single.checked === true) {
                        return{
                            ...single,
                            value: single.value
                        }
                        /*single.value = single.value*/
                    } return single
                })
                return {
                    numbers: updatedNumbersArr,
                    count: tallyCount
                }
            })
            /*const updatedNumbersArr = this.state.numbers.map(function(single){
                if(single.checked === false){
                    single.value = Math.floor(Math.random() * 6) 
                } else if (single.checked === true){
                    single.value = "This Works"
                } return single
            })
            
            this.setState({
                numbers: updatedNumbersArr,
                count: tallyCount
            })*/
            /*this.setState({
                numbers: numbersArrNew,
                count: tallyCount
                /*num1: { value: Math.floor(Math.random() * 6) },
                num2: { value: Math.floor(Math.random() * 6) },
                num3: { value: Math.floor(Math.random() * 6) },
                num4: { value: Math.floor(Math.random() * 6) },
                num5: { value: Math.floor(Math.random() * 6) },
                count: tallyCount //
            })*/
        } else {
            /*console.log("this else works")*/
            this.setState({
                numbers: originalNumbersArr,
                count: 0
                /*num1: { value: 0, checked: false },
                num2: { value: 0, checked: false },
                num3: { value: 0, checked: false },
                num4: { value: 0, checked: false },
                num5: { value: 0, checked: false },
                count: 0,*/
            })
            /*console.log("This has been executed!")*/
        }
    }

    render() {
        const marked = this.checked
        /*const numsArr = [
            {
                key: 1,
                number: this.state.num1.value,
                marked: this.state.num1.checked,
                action: this.checked
            },
            {
                key: 2,
                number: this.state.num2.value,
                marked: this.state.num2.checked,
                action: this.checked
            },
            {
                key: 3,
                number: this.state.num3.value,
                marked: this.state.num3.checked,
                action: this.checked
            },
            {
                key: 4,
                number: this.state.num4.value,
                marked: this.state.num4.checked,
                action: this.checked
            },
            {
                key: 5,
                number: this.state.num5.value,
                marked: this.state.num5.checked,
                action: this.checked
            }
        ]*/
        const dieNumber = this.state.numbers.map(function (num) {
            return (
                <Die
                    key={num.id}
                    id={num.id}
                    value={num.value}
                    pressed={num.checked}
                    selected={marked}
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
            </div >
        )
    }
}

export default DiceBox