// get pace of a single athlete in min/km
export const get_athlete_pace = (athlete) => {
    return athlete.chipTime / 60 / 42.2
}

// add zeros to front of a string to pad to a certain length.
export const zero_pad = (num, places) => String(num).padStart(places, '0')

// convert e.g. 4.5 to 4:30.
export const convert_fractional_pace_to_minute_and_seconds = (number) => {
    var decimal = number - Math.floor(number)
    var seconds = Math.round(decimal * 60)
    return Math.floor(number).toString() + ':' + zero_pad(seconds.toString(), 2)
}

// e.g. 3600 returns 1:00:00
export const convert_seconds_to_hms = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8)
}

// return integers between two other integers.
export function get_all_numbers_between(x, y) {
    var numbers = [];
    for (var i = x; i < y; i++) {
        numbers.push(i);
    }
    return numbers;
}

// given a pace and a list of other paces, calculate percentage of other paces that are slower than this one.
export const calculate_pace_percentage = (pace, paces) => {
    var fraction_slower = paces.filter(e => e > pace).length / paces.length
    return Math.round((1 - fraction_slower) * 10000) / 100
}