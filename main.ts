function sprite () {
    inkybit.drawIcon(
    IconNames.Heart,
    x,
    y,
    inkybit.Color.Black,
    inkybit.TextSize.Regular
    )
    inkybit.show()
    y += 1
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    inkybit.clear()
    inkybit.drawText(
    "Jørgen",
    0,
    0,
    inkybit.Color.Black,
    inkybit.TextSize.Regular
    )
})
input.onButtonPressed(Button.B, function () {
    inkybit.clear()
    inkybit.drawText(
    "Oscar",
    0,
    0,
    inkybit.Color.Black,
    inkybit.TextSize.Regular
    )
})
let y = 0
let x = 0
x = 0
y = 0
inkybit.clear()
inkybit.drawText(
"Hello world",
x,
y,
inkybit.Color.Black,
inkybit.TextSize.Regular
)
inkybit.drawRectangle(
0,
50,
119,
20,
inkybit.Color.Black,
false
)
inkybit.show()
basic.forever(function () {
	
})
