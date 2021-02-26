radio.onReceivedNumber(function (receivedNumber) {
    transmittedTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    Celsius = transmittedTemp
    basic.showNumber(transmittedTemp)
})
input.onButtonPressed(Button.B, function () {
    Fahrenheit = transmittedTemp * 1.8 + 32
    basic.showNumber(Fahrenheit)
})
let Fahrenheit = 0
let Celsius = 0
let transmittedTemp = 0
radio.setGroup(1)
basic.forever(function () {
    Fahrenheit = transmittedTemp * 1.8 + 32
    if (Fahrenheit < 64) {
        basic.showIcon(IconNames.Sad)
    }
    if (Fahrenheit >= 64 && Fahrenheit <= 75) {
        basic.showIcon(IconNames.Happy)
    }
    if (Fahrenheit > 75) {
        basic.showIcon(IconNames.Angry)
    }
    basic.pause(5000)
    basic.clearScreen()
    basic.showNumber(Fahrenheit)
})
