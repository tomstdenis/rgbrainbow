function plot (x: number, y: number, r: number, g: number, b: number) {
    i = x * 8
    if (x % 2 == 0) {
        i = i + y
    } else {
        i = i + (7 - y)
    }
    strip.setPixelColor(i, neopixel.rgb(r, g, b))
}
input.onGesture(Gesture.Shake, function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
let i = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
plot(0, 0, 255, 0, 0)
strip.show()
basic.forever(function () {
	
})
