let Kompas = 0
basic.forever(function () {
    Kompas = input.compassHeading()
    if (Kompas > 315 || Kompas <= 45) {
        basic.showString("N")
    } else if (Kompas > 45 && Kompas <= 135) {
        basic.showString("E")
    } else if (Kompas > 135 && Kompas <= 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
