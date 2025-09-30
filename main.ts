// Sonido del cerdo (oink)
function sonidoCerdo () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
}
// Botón A: Oveja
input.onButtonPressed(Button.A, function () {
    apagarLEDs()
    pins.digitalWritePin(ledOveja, 1)
    sonidoOveja()
})
// Sonido de la oveja (baa)
function sonidoOveja () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
}
// Botón A+B: Vaca
input.onButtonPressed(Button.AB, function () {
    apagarLEDs()
    pins.digitalWritePin(ledVaca, 1)
    sonidoVaca()
})
// Apagar todos los LEDs
function apagarLEDs () {
    pins.digitalWritePin(ledOveja, 0)
    pins.digitalWritePin(ledCerdo, 0)
    pins.digitalWritePin(ledVaca, 0)
}
// Botón B: Cerdo
input.onButtonPressed(Button.B, function () {
    apagarLEDs()
    pins.digitalWritePin(ledCerdo, 1)
    sonidoCerdo()
})
// Sonido de la vaca (moo)
function sonidoVaca () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
}
let ledVaca = 0
let ledCerdo = 0
let ledOveja = 0
// Configura los pines para los LEDs
ledOveja = DigitalPin.P0
ledCerdo = DigitalPin.P1
ledVaca = DigitalPin.P2
