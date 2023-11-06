input.onButtonPressed(Button.A, function () {
    led.toggle(X, Y)
    X += -1
    led.toggle(X, Y)
})
input.onPinPressed(TouchPin.P2, function () {
    led.toggle(X, Y)
    Y += 1
    led.toggle(X, Y)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(X, Y)
    X += 1
    led.toggle(X, Y)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.toggle(X, Y)
    Y += -1
    led.toggle(X, Y)
})
let Y = 0
let X = 0
X = 2
Y = 2
led.plot(X, Y)
