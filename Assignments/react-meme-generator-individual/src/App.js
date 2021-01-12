import React from "react"

import axios from "axios"

import Memes from "./Memes"

/*const allSelectedMemes = []
const placeKeeper = []*/
const savedMemeAndText = []

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            memeValue: 0,
            newMeme: [],
            /*allMemes: placeKeeper,*/
            topText: "",
            bottomText: "",
            selectedMemeAndText: savedMemeAndText
        }
        this.randomNumber = this.randomNumber.bind(this)
        this.selectedMemeText = this.selectedMemeText.bind(this)
        this.fillIn = this.fillIn.bind(this)
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes").then((response) => {
            this.setState({
                list: response.data.data.memes
            })
            /*console.log(response.data)*/
        })
    }

    randomNumber() {
        const total = this.state.list.length
        let random = Math.floor(Math.random() * total)

        let memeData = this.state.list
        let memePosition = this.state.memeValue
        const data = memeData[memePosition]

        this.setState({
            memeValue: random,
            newMeme: data
        })
        /*console.log(random)
        console.log(total)*/
    }

    /*selectedMemeText() {
        const selected = this.state.newMeme
        allSelectedMemes.push(selected)

        let allText = {
            topText: this.state.topText,
            bottomText: this.state.bottomText
        }
        savedText.push(allText)

        this.setState({
            allMemes: allSelectedMemes,
            topText: "",
            bottomText: "",
            selectedText: savedText
        })
    }*/

    selectedMemeText() {

        let allMemeAndText = {
            topText: this.state.topText,
            bottomText: this.state.bottomText,
            memeKey: this.state.newMeme.id,
            memeUrl: this.state.newMeme.url
        }
        savedMemeAndText.push(allMemeAndText)

        this.setState({
            topText: "",
            bottomText: "",
            selectedMemeAndText: savedMemeAndText
        })
    }

    /*fillIn(event) {
        const { name, value } = event.target
        this.setState({
            memeText: {
                [name]: [value]
            }
        })
    }*/

    fillIn(event) {
        const { name, value } = event.target
        this.setState({
            [name]: [value]
        })
    }

    render() {

        let selection = this.state.selectedMemeAndText
        /*console.log(selection)*/

        const updatedData = selection.map(function (each) {
            return (
                <Memes
                    key={each.memeKey}
                    choices={each.memeUrl}
                    topText={each.topText}
                    bottomText={each.bottomText}
                />
            )
        })

        /*console.log(this.state.newMeme)*/
        let choosenMeme = this.state.newMeme.url

        return (
            <div>
                <h1>React Meme Generator</h1>
                <div className="intialMemeContainer">
                    <img src={choosenMeme} height="600" width="600" />
                    <p className="topText">{this.state.topText}</p>
                    <p className="bottomText">{this.state.bottomText}</p>
                </div>
                <form>
                    <input
                        type="text"
                        name="topText"
                        placeHolder="Top Text"
                        value={this.state.topText}
                        onChange={this.fillIn}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeHolder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.fillIn}
                    />
                </form>
                <button onClick={this.randomNumber}>New Meme</button>
                <button onClick={this.selectedMemeText}>Select Meme</button>
                {updatedData}
            </div>
        )
    }
}

export default App