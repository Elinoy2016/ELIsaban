basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Sad)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
})
