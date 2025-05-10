let brightness = 255

basic.forever(function () {
    basic.clearScreen()
    led.plotBrightness(0, 3, brightness)
    led.plotBrightness(1, 4, brightness)
    led.plotBrightness(2, 4, brightness)
    led.plotBrightness(3, 4, brightness)
    led.plotBrightness(4, 3, brightness)
    led.plotBrightness(1, 1, brightness)
    led.plotBrightness(3, 1, brightness)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)

    // החלפת בהירות בין גבוהה לנמוכה
    if (brightness == 255) {
        brightness = 50
    } else {
        brightness = 255
    }
})
basic.forever(function () {
    music.ringTone(988)  // תדר גבוה יותר
    basic.pause(200)
    music.ringTone(659)  // תדר נמוך יותר
    basic.pause(200)
})
basic.forever(function () {
  
   

    // לכבות אורות
    basic.clearScreen()
    music.rest(music.beat(BeatFraction.Sixteenth))

    // צליל נמוך + אורות בצד ימין
    music.ringTone(659)
    led.plot(3, 2)
    led.plot(3, 3)
    led.plot(4, 2)
    led.plot(4, 3)
    basic.pause(200)

    // לכבות אורות
    basic.clearScreen()
    music.rest(music.beat(BeatFraction.Sixteenth))
})

basic.forever(function () {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    basic.pause(1000)
})