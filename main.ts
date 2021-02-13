let RoomLight = 0
// The code runs in a loop forever
basic.forever(function () {
    // A variable, RoomLight, stores the light level as a number
    // The block "light level" reads the light intensity from 0 to 255
    RoomLight = input.lightLevel()
    // The 5x5 LED panel lights up with RoomLight. When RoomLight is 255, all the panel is lit.
    led.plotBarGraph(
    RoomLight,
    255
    )
})
