export const get_athlete_pace = (athlete) => {
    return athlete.chipTime / 60 / 42.2
}

export const zero_pad = (num, places) => String(num).padStart(places, '0')

export const convert_fractional_pace_to_minute_and_seconds = (number) => {
    // convert e.g. 4.5 to 4:30.
    var decimal = number - Math.floor(number)
    var seconds = Math.round(decimal * 60)
    return Math.floor(number).toString() + ':' + zero_pad(seconds.toString(), 2)
}

export const convert_seconds_to_hms = (seconds) => {
    // e.g. 3600 returns 1:00:00
    return new Date(seconds * 1000).toISOString().substr(11, 8)
}

export function get_all_numbers_between(x, y) {
    var numbers = [];
    for (var i = x; i < y; i++) {
        numbers.push(i);
    }
    return numbers;
}

export const calculate_pace_percentage = (pace, paces) => {
    // given a pace and a list of other paces, calculate percentage of other paces that are slower than this one.
    var fraction_slower = paces.filter(e => e > pace).length / paces.length
    return Math.round((1 - fraction_slower) * 10000) / 100
}