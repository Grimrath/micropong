function create_empty_playingfield () {
    return [
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0,
    0
    ]
    ]
}
// Only 5x5 first
function display_5x5_playingfield (_2Darray: any[]) {
    for (let x = 0; x <= _2Darray.length - 1; x++) {
        for (let y = 0; y <= _2Darray[x].length - 1; y++) {
            led.plot(x, y)
        }
    }
}
let playingfield = create_empty_playingfield()
display_5x5_playingfield(playingfield)
basic.forever(function () {
	
})
