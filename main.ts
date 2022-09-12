// This is the sender

let alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let letter = 0
let message = "R"

radio.setGroup(17)

basic.showString("S")

input.onButtonPressed(Button.A, function () {
    letter += 1
    if (letter > 25) { letter = 0 }
    message = alphabet[letter]
    basic.showString(message)
    radio.sendString(message)
    basic.showString("S")
})

input.onButtonPressed(Button.B, function () {
    letter -= 1
    if (letter < 0) {
        letter = 25
    }
    message = alphabet[letter]
    basic.showString(message)
    radio.sendString(message)
    basic.showString("S")
})


basic.forever(function () {
    radio.sendString(message)
    basic.pause(10000)
})
