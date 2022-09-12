function init_ball () {
    ball = []
    ball[xcoordinate] = 2
    ball[ycoordinate] = 2
    ball[2] = ArrowNames.West
}
function init_rules () {
    playingfield_length_x = 5
    playingfield_height_y = 5
    playingfield = create_empty_5x5_playingfield()
    // the index position of x-coordinate in an object array
    xcoordinate = 0
    // the index position of y-coordinate in an object array
    ycoordinate = 1
}
input.onButtonPressed(Button.A, function () {
    update_field_position_paddle(paddle_west, -1)
    display_5x5_playingfield(playingfield)
})
function update_field_position_paddle (paddle_id: number[], number: number) {
    // remove old position from field
    // remove old position from field
    playingfield[paddle_id[xcoordinate]][paddle_id[ycoordinate]] = 0
    // update paddle y-coord
    // update paddle y-coord
    paddle_id[ycoordinate] = paddle_id[ycoordinate] + number
    // add new position to field
    // add new position to field
    playingfield[paddle_id[xcoordinate]][paddle_id[ycoordinate]] = 1
}
function create_empty_5x5_playingfield () {
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
input.onButtonPressed(Button.B, function () {
    update_field_position_paddle(paddle_west, 1)
    display_5x5_playingfield(playingfield)
})
// Only 5x5 first
function display_5x5_playingfield (_2Darray: number[][]) {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (_2Darray[x][y] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
}
function init_position_paddle_west () {
    paddle_west = []
    paddle_west[xcoordinate] = 0
    paddle_west[ycoordinate] = Math.round((playingfield_height_y - 1) / 2)
}
function update_field_position_ball () {
    // remove old position from field
    // remove old position from field
    playingfield[ball[xcoordinate]][ball[ycoordinate]] = 0
}
// replaces 5x5 version when 4 microbits are used as display
function create_empty_10x10_playingfield () {
    return [
    [
    0,
    0,
    0,
    0,
    0,
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
    0,
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
    0,
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
    0,
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
    0,
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
    0,
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
    0,
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
    0,
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
    0,
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
    0,
    0,
    0,
    0,
    0,
    0
    ]
    ]
}
let playingfield_height_y = 0
let playingfield_length_x = 0
let ycoordinate = 0
let xcoordinate = 0
let ball: number[] = []
let playingfield: number[][] = []
let paddle_west: number[] = []
init_rules()
init_position_paddle_west()
update_field_position_paddle(paddle_west, 0)
display_5x5_playingfield(playingfield)
basic.forever(function () {
	
})
