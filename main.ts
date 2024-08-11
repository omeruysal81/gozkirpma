basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
})
