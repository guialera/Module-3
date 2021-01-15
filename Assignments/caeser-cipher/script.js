var readline = require("readline-sync");

var input = readline.question("What phrase would like to encrypt? ").toLowerCase();

var shift = parseInt(readline.question("How many letter would you like to shift? "));

/*console.log(input)

console.log(shift)*/

function letterConversion(input, shift) {
    /*console.log(`this function works ${input}`)
    console.log(`this function works ${shift}`)*/

    let separatedStringArr = input.split("");
    /*console.log(separatedStringArr)*/

    let letterConversionNum = separatedStringArr.map(function (each) {
        if (each === "a") {
            return 1
        } else if (each === "b") {
            return 2
        } else if (each === "c") {
            return 3
        } else if (each === "d") {
            return 4
        } else if (each === "e") {
            return 5
        } else if (each === "f") {
            return 6
        } else if (each === "g") {
            return 7
        } else if (each === "h") {
            return 8
        } else if (each === "i") {
            return 9
        } else if (each === "j") {
            return 10
        } else if (each === "k") {
            return 11
        } else if (each === "l") {
            return 12
        } else if (each === "m") {
            return 13
        } else if (each === "n") {
            return 14
        } else if (each === "o") {
            return 15
        } else if (each === "p") {
            return 16
        } else if (each === "q") {
            return 17
        } else if (each === "r") {
            return 18
        } else if (each === "s") {
            return 19
        } else if (each === "t") {
            return 20
        } else if (each === "u") {
            return 21
        } else if (each === "v") {
            return 22
        } else if (each === "w") {
            return 23
        } else if (each === "x") {
            return 24
        } else if (each === "y") {
            return 25
        } else if (each === "z") {
            return 26
        } else {
            return each
        }
    })

    /*console.log(letterConversionNum)*/

    let letterNumAddition = letterConversionNum.map(function (each) {
        if (typeof each === "number") {
            return (Number(each) + Number(shift))
        } else {
            return each
        }
    })

    /*console.log(letterNumAddition)*/

    let finalEncryption = letterNumAddition.map(function (each) {
        if (each === 1 || each === 27) {
            return "a"
        } else if (each === 2 || each === 28) {
            return "b"
        } else if (each === 3 || each === 29) {
            return "c"
        } else if (each === 4 || each === 30) {
            return "d"
        } else if (each === 5 || each === 31) {
            return "e"
        } else if (each === 6 || each === 32) {
            return "f"
        } else if (each === 7 || each === 33) {
            return "g"
        } else if (each === 8 || each === 34) {
            return "h"
        } else if (each === 9 || each === 35) {
            return "i"
        } else if (each === 10 || each === 36) {
            return "j"
        } else if (each === 11 || each === 37) {
            return "k"
        } else if (each === 12 || each === 38) {
            return "l"
        } else if (each === 13 || each === 39) {
            return "m"
        } else if (each === 14 || each === 40) {
            return "n"
        } else if (each === 15 || each === 41) {
            return "o"
        } else if (each === 16 || each === 42) {
            return "p"
        } else if (each === 17 || each === 43) {
            return "q"
        } else if (each === 18 || each === 44) {
            return "r"
        } else if (each === 19 || each === 45) {
            return "s"
        } else if (each === 20 || each === 46) {
            return "t"
        } else if (each === 21 || each === 47) {
            return "u"
        } else if (each === 22 || each === 48) {
            return "v"
        } else if (each === 23 || each === 49) {
            return "w"
        } else if (each === 24 || each === 50) {
            return "x"
        } else if (each === 25 || each === 51) {
            return "y"
        } else if (each === 26 || each === 52) {
            return "z"
        } else {
            return each
        }
    })

    /*console.log(finalEncryption)*/

    let encrypted = finalEncryption.join("")

    console.log(encrypted)
}

letterConversion(input, shift)