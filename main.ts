input.onButtonPressed(Button.AB, function () {
    if (luz) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
    }
})
let luz: game.LedSprite = null
luz = game.createSprite(2, 2)
basic.forever(function () {
    luz.move(1)
    basic.pause(100)
    luz.ifOnEdgeBounce()
})
