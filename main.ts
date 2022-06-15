input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
basic.showNumber(8)
basic.forever(function () {
	
})
