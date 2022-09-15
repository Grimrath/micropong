function Sandstorm () {
    for (let index = 0; index < 8; index++) {
        music.playMelody("E - E E E - E - ", 680)
        music.playMelody("E - E E E - E - ", 680)
        music.playMelody("A - A A A - A - ", 680)
        music.playMelody("G - G - G - D - ", 680)
        music.playMelody("E - E E E - E - ", 680)
        music.playMelody("E - E E E - A - ", 680)
        music.playMelody("E - E E E - E - ", 680)
        music.playMelody("E - E E E - E - ", 680)
    }
}
function init_misc () {
    // index of x-coordinate in list
    xcoordinate = 0
    // index of y-coordinate in list
    ycoordinate = 1
    // Used to trick functions to know that it is an array of arrays of numbers
    arrayofarraysofnumbers = [[0, 0]]
}
function plot_LEDs (list_of_coords: string[]) {
    basic.clearScreen()
    for (let value of list_of_coords) {
        led.plot(parseFloat(value.split(",")[0]), parseFloat(value.split(",")[1]))
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (mode == pairing) {
        next_available_id = receivedNumber
        if (next_available_id > player_2) {
            mode = ingame
        } else {
        	
        }
    }
})
function move_paddle_bottom (num: number) {
    if (bottom_paddle_left_pos_x < 7) {
        if (bottom_paddle_left_pos_x > 0) {
            bottom_paddle_left_pos_x = bottom_paddle_left_pos_x + num
        }
    }
    if (bottom_paddle_mid_pos_x < 8) {
        if (bottom_paddle_mid_pos_x > 1) {
            bottom_paddle_mid_pos_x = bottom_paddle_mid_pos_x + num
        }
    }
    if (bottom_paddle_right_pos_x < 9) {
        if (bottom_paddle_right_pos_x > 2) {
            bottom_paddle_right_pos_x = bottom_paddle_right_pos_x + num
        }
    }
    update_displays()
}
function init_ids () {
    next_available_id = 1
    player_1_master = 5
    player_2 = 6
    display_1 = 1
    display_2 = 2
    display_3 = 3
    display_4 = 4
}
function combine_lists (list1: number[], list2: number[]) {
    for (let value6 of list2) {
        list1.push(value6)
    }
    return list1
}
function init_modes () {
    pairing = 0
    intro = 1
    ingame = 2
    goal = 3
}
function make_paddle_top () {
    top_paddle_left_pos_x = 1
    top_paddle_mid_pos_x = 2
    top_paddle_right_pos_x = 3
    top_paddle_pos_y = 0
}
function draw_coords (coord_list: any[]) {
    tmp_update_displays_list = sort_coords_into_quadrants(coord_list)
    for (let value32 of tmp_update_displays_list) {
        radio.sendString("" + (value32))
    }
}
function number_to_coords (num: number, quadrant: number, upside_down: number) {
    if (num == 0) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([1, 0])
        coords_list.push([1, 3])
        coords_list.push([2, 0])
        coords_list.push([2, 3])
        coords_list.push([3, 0])
        coords_list.push([3, 3])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
    } else if (num == 1) {
        coords_list = [[0, 2]]
        coords_list.push([1, 1])
        coords_list.push([1, 2])
        coords_list.push([2, 2])
        coords_list.push([3, 2])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    } else if (num == 2) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 3])
        coords_list.push([2, 1])
        coords_list.push([2, 2])
        coords_list.push([2, 3])
        coords_list.push([3, 1])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    } else if (num == 3) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 3])
        coords_list.push([2, 1])
        coords_list.push([2, 2])
        coords_list.push([2, 3])
        coords_list.push([3, 3])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    } else if (num == 4) {
        coords_list = [[0, 1]]
        coords_list.push([0, 3])
        coords_list.push([1, 1])
        coords_list.push([1, 3])
        coords_list.push([2, 1])
        coords_list.push([2, 2])
        coords_list.push([2, 3])
        coords_list.push([3, 3])
        coords_list.push([4, 3])
    } else if (num == 5) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 1])
        coords_list.push([2, 1])
        coords_list.push([2, 2])
        coords_list.push([2, 3])
        coords_list.push([3, 3])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    } else if (num == 6) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 1])
        coords_list.push([2, 1])
        coords_list.push([2, 2])
        coords_list.push([2, 3])
        coords_list.push([3, 1])
        coords_list.push([3, 3])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    } else if (num == 7) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 3])
        coords_list.push([2, 3])
        coords_list.push([3, 3])
        coords_list.push([4, 3])
    } else if (num == 8) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 1])
        coords_list.push([1, 3])
        coords_list.push([2, 1])
        coords_list.push([2, 2])
        coords_list.push([2, 3])
        coords_list.push([3, 1])
        coords_list.push([3, 3])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    } else if (num == 9) {
        coords_list = [[0, 1]]
        coords_list.push([0, 2])
        coords_list.push([0, 3])
        coords_list.push([1, 1])
        coords_list.push([1, 3])
        coords_list.push([2, 0])
        coords_list.push([2, 1])
        coords_list.push([2, 3])
        coords_list.push([3, 1])
        coords_list.push([3, 3])
        coords_list.push([4, 1])
        coords_list.push([4, 2])
        coords_list.push([4, 3])
    }
    coords_row_0 = coords_list[0]
    coords_row_1 = coords_list[1]
    coords_row_2 = coords_list[2]
    coords_row_3 = coords_list[3]
    coords_row_4 = coords_list[4]
    if (upside_down == 1) {
        coords_row_0.reverse()
        coords_row_1.reverse()
        coords_row_2.reverse()
        coords_row_3.reverse()
        coords_row_4.reverse()
        coords_list = [
        coords_row_4,
        coords_row_3,
        coords_row_2,
        coords_row_1,
        coords_row_0
        ]
    }
    if (quadrant == 1 || quadrant == 4) {
        for (let value4 of coords_list) {
            value4[0] = value4[0] + 5
        }
    }
    if (quadrant == 3 || quadrant == 4) {
        for (let value5 of coords_list) {
            value5[1] = value5[1] + 5
        }
    }
    return coords_list
}
input.onButtonPressed(Button.A, function () {
    if (mode == ingame) {
        if (my_id == player_1_master) {
            move_paddle_top(-1)
        } else if (my_id == player_2) {
            radio.sendValue("bottom", -1)
        }
    }
})
function visual_player_1_goalscored_on () {
    if (mode == 3) {
        music.playMelody("C D E F G A B C5 ", 240)
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Square)
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.SmallDiamond)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.SmallSquare)
        }
        mode = 2
    }
}
function make_ball () {
    ball_pos_x = 2
    ball_pos_y = 1
    ball_v_x = randint(-1, 1)
    ball_v_y = randint(0, 1) * 2 - 1
}
function move_paddle_top (num: number) {
    if (top_paddle_left_pos_x < 7) {
        if (top_paddle_left_pos_x > 0) {
            top_paddle_left_pos_x = top_paddle_left_pos_x + num
        }
    }
    if (top_paddle_mid_pos_x < 8) {
        if (top_paddle_mid_pos_x > 1) {
            top_paddle_mid_pos_x = top_paddle_mid_pos_x + num
        }
    }
    if (bottom_paddle_right_pos_x < 9) {
        if (bottom_paddle_right_pos_x > 2) {
            bottom_paddle_right_pos_x = bottom_paddle_right_pos_x + num
        }
        update_displays()
    }
}
function collect_position_coordinates () {
    tmp_list_of_coords = [
    [ball_pos_x, ball_pos_y],
    [bottom_paddle_left_pos_x, bottom_paddle_pos_y],
    [bottom_paddle_mid_pos_x, bottom_paddle_pos_y],
    [bottom_paddle_right_pos_x, bottom_paddle_pos_y],
    [top_paddle_left_pos_x, top_paddle_pos_y],
    [top_paddle_mid_pos_x, top_paddle_pos_y],
    [top_paddle_right_pos_x, top_paddle_pos_y]
    ]
    return tmp_list_of_coords
}
function init_game_state () {
    intervallen = 1000
    make_paddle_bottom()
    make_paddle_top()
    make_ball()
}
input.onButtonPressed(Button.AB, function () {
    if (mode == pairing) {
        my_id = next_available_id
        basic.showNumber(my_id)
        radio.sendNumber(next_available_id + 1)
    }
})
// LED on/off commands
radio.onReceivedString(function (receivedString) {
    if (my_id >= display_1 && my_id <= display_4) {
        if (parseFloat(receivedString.substr(0, 1)) == my_id) {
            tmp_coords_as_string = receivedString.substr(1, receivedString.length - 1)
            plot_LEDs(string_to_list(tmp_coords_as_string))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == ingame) {
        if (my_id == player_1_master) {
            move_paddle_top(1)
        } else if (my_id == player_2) {
            radio.sendValue("bottom", 1)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    intervallen += -25
})
function make_paddle_bottom () {
    bottom_paddle_left_pos_x = 1
    bottom_paddle_mid_pos_x = 2
    bottom_paddle_right_pos_x = 3
    bottom_paddle_pos_y = 9
}
function list_of_text_to_string (list_of_text_elements: any[]) {
    string = ""
    for (let value2 of list_of_text_elements) {
        string = "" + string + value2
    }
    return string
}
function string_to_list (message_as_text: string) {
    tmp_string_1 = message_as_text
    tmp_return_list_1 = []
    for (let index = 0; index < message_as_text.length / 2; index++) {
        tmp_return_list_1.unshift("" + tmp_string_1.substr(0, 1) + "," + tmp_string_1.substr(1, 1))
        tmp_string_1 = tmp_string_1.substr(2, tmp_string_1.length - 2)
    }
    return tmp_return_list_1
}
// Paddle movement commands
radio.onReceivedValue(function (name, value) {
    if (mode == ingame && my_id == player_1_master) {
        if (name == "top") {
            move_paddle_top(value)
        } else if (name == "bottom") {
            move_paddle_bottom(value)
        }
    }
})
function sort_coords_into_quadrants (list_of_coords: number[][]) {
    tmp_quadrant_one_coordinates = [convertToText(display_1)]
    tmp_quadrant_two_coordinates = [convertToText(display_2)]
    tmp_quadrant_three_coordinates = [convertToText(display_3)]
    tmp_quadrant_four_coordinates = [convertToText(display_4)]
    for (let coords of list_of_coords) {
        if (coords[xcoordinate] <= 4) {
            // Kvadrant 2
            if (coords[ycoordinate] <= 4) {
                tmp_quadrant_two_coordinates.push("" + convertToText(coords[xcoordinate]) + convertToText(coords[ycoordinate]))
            } else {
                tmp_quadrant_three_coordinates.push("" + convertToText(coords[xcoordinate]) + convertToText(coords[ycoordinate] - 5))
            }
        } else {
            // Kvadrant 1
            if (coords[ycoordinate] <= 4) {
                tmp_quadrant_one_coordinates.push("" + convertToText(coords[xcoordinate] - 5) + convertToText(coords[ycoordinate]))
            } else {
                tmp_quadrant_four_coordinates.push("" + convertToText(coords[xcoordinate] - 5) + convertToText(coords[ycoordinate] - 5))
            }
        }
    }
    return [
    list_of_text_to_string(tmp_quadrant_one_coordinates),
    list_of_text_to_string(tmp_quadrant_two_coordinates),
    list_of_text_to_string(tmp_quadrant_three_coordinates),
    list_of_text_to_string(tmp_quadrant_four_coordinates)
    ]
}
function update_displays () {
    tmp_update_displays_list = sort_coords_into_quadrants(collect_position_coordinates())
    for (let value3 of tmp_update_displays_list) {
        radio.sendString("" + (value3))
    }
}
function check_move () {
    if (ball_pos_x == 0 || ball_pos_x == 9) {
        ball_v_x = ball_v_x * -1
    }
    next_x = ball_pos_x + ball_v_x
    next_y = ball_pos_y + ball_v_y
    if (next_y == 9) {
        if (ball_pos_x == bottom_paddle_left_pos_x) {
            ball_v_y = ball_v_y * -1
            ball_v_x = ball_v_x + -1
            next_x = ball_pos_x + ball_v_x
            if (next_x < 0 || next_x > 9) {
                ball_v_x = ball_v_x * -1
            }
        } else if (ball_pos_x == bottom_paddle_mid_pos_x) {
            ball_v_y = ball_v_y * -1
        } else if (ball_pos_x == bottom_paddle_right_pos_x) {
            ball_v_y = ball_v_y * -1
            ball_v_x = ball_v_x + 1
            next_x = ball_pos_x + ball_v_x
            if (next_x < 0 || next_x > 9) {
                ball_v_x = ball_v_x * -1
            }
        } else if (next_x == bottom_paddle_left_pos_x || next_x == bottom_paddle_right_pos_x) {
            ball_v_x = 0
            ball_v_y = -1
        }
    }
    if (next_y == 0) {
        if (ball_pos_x == top_paddle_left_pos_x) {
            ball_v_y = ball_v_y * -1
            ball_v_x = ball_v_x + -1
            next_x = ball_pos_x + ball_v_x
            if (next_x < 0 || next_x > 9) {
                ball_v_x = ball_v_x * -1
            }
        } else if (ball_pos_x == top_paddle_mid_pos_x) {
            ball_v_y = ball_v_y * -1
        } else if (ball_pos_x == top_paddle_right_pos_x) {
            ball_v_y = ball_v_y * -1
            ball_v_x = ball_v_x + 1
            next_x = ball_pos_x + ball_v_x
            if (next_x < 0 || next_x > 9) {
                ball_v_x = ball_v_x * -1
            }
        } else if (next_x == top_paddle_left_pos_x || next_x == top_paddle_right_pos_x) {
            ball_v_x = 0
            ball_v_y = -1
        }
    }
    if (ball_pos_y == 0 || ball_pos_y == 9) {
        ball_v_y = ball_v_y * -1
    }
    if (ball_v_x == 2) {
        ball_v_x = 1
    }
    if (ball_v_x == -2) {
        ball_v_x = -1
    }
}
function move_ball () {
    check_move()
    ball_pos_x = ball_pos_x + ball_v_x
    ball_pos_y = ball_pos_y + ball_v_y
    update_displays()
}
function make_Ready () {
    if (START == true) {
        READY = true
        START = false
    }
}
let READY = false
let START = false
let next_y = 0
let next_x = 0
let tmp_quadrant_four_coordinates: string[] = []
let tmp_quadrant_three_coordinates: string[] = []
let tmp_quadrant_two_coordinates: string[] = []
let tmp_quadrant_one_coordinates: string[] = []
let tmp_return_list_1: string[] = []
let tmp_string_1 = ""
let string = ""
let tmp_coords_as_string = ""
let intervallen = 0
let bottom_paddle_pos_y = 0
let tmp_list_of_coords: number[][] = []
let ball_v_y = 0
let ball_v_x = 0
let ball_pos_y = 0
let ball_pos_x = 0
let coords_row_4: number[] = []
let coords_row_3: number[] = []
let coords_row_2: number[] = []
let coords_row_1: number[] = []
let coords_row_0: number[] = []
let coords_list: number[][] = []
let tmp_update_displays_list: string[] = []
let top_paddle_pos_y = 0
let top_paddle_right_pos_x = 0
let top_paddle_mid_pos_x = 0
let top_paddle_left_pos_x = 0
let goal = 0
let intro = 0
let display_4 = 0
let display_3 = 0
let display_2 = 0
let display_1 = 0
let player_1_master = 0
let bottom_paddle_right_pos_x = 0
let bottom_paddle_mid_pos_x = 0
let bottom_paddle_left_pos_x = 0
let ingame = 0
let player_2 = 0
let next_available_id = 0
let arrayofarraysofnumbers: number[][] = []
let ycoordinate = 0
let xcoordinate = 0
let pairing = 0
let mode = 0
let my_id = 0
radio.setGroup(145)
my_id = 0
init_misc()
init_ids()
init_modes()
init_game_state()
mode = pairing
basic.forever(function () {
    if (my_id == player_1_master) {
        if (mode == ingame) {
            basic.pause(intervallen)
            move_ball()
        }
    }
})
