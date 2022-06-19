import React from "react"
import { MyPlotly } from "../../components/MyPlotly"
import * as d3 from "d3"
import {
  get_athlete_pace,
  convert_seconds_to_hms,
  get_all_numbers_between,
  calculate_pace_percentage,
  convert_fractional_pace_to_minute_and_seconds,
} from "./utils"

const generate_hover_text = (e, paces) => {
  return (
    "pace: " +
    convert_fractional_pace_to_minute_and_seconds(e.x0) +
    " - " +
    convert_fractional_pace_to_minute_and_seconds(e.x1) +
    "<br>Finish time: " +
    convert_seconds_to_hms(42.195 * e.x0 * 60) +
    " - " +
    convert_seconds_to_hms(42.195 * e.x1 * 60) +
    "<br>" +
    "Fastest " +
    calculate_pace_percentage(e.x1, paces).toString() +
    "%"
  )
}

const PaceHistogram = ({ athlete, data, title, category_filter }) => {
  var paces = data.map(e => get_athlete_pace(e))
  var x_min = Math.min(...paces) - 0.5
  var x_max = Math.max(...paces) + 0.5
  if (category_filter) {
    paces = data
      .filter(e => e.category == athlete.category)
      .map(e => get_athlete_pace(e))
  }

  var histGenerator = d3.bin().domain([x_min, x_max]).thresholds(50)
  var arr = histGenerator(paces)

  var x_values = arr.map(e => {
    return 0.5 * (Math.floor(e.x0 * 10) / 10 + Math.ceil(e.x1 * 10) / 10)
  })

  var y_values = arr.map(e => {
    return e.length
  })

  var trace1 = {
    x: x_values,
    y: y_values,
    hovertext: arr.map(e => {
      return generate_hover_text(e, paces)
    }),
    hoverinfo: "text",
    type: "bar",
    marker: {
      color: "rgb(158,202,225)",
      opacity: 1,
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  }

  var annotation =
    "pace: " +
    convert_fractional_pace_to_minute_and_seconds(get_athlete_pace(athlete)) +
    " min/km<br>" +
    "Fastest " +
    calculate_pace_percentage(get_athlete_pace(athlete), paces).toString() +
    "%"
  var x_tick_vals = get_all_numbers_between(
    Math.floor(Math.min(...paces)),
    Math.ceil(Math.max(...paces))
  )
  var x_tick_text = x_tick_vals.map(e => {
    return convert_fractional_pace_to_minute_and_seconds(e)
  })

  var layout = {
    title: { text: title },
    barmode: "stack",
    xaxis: {
      tickmode: "array",
      tickvals: x_tick_vals,
      ticktext: x_tick_text,
      range: [x_min, x_max],
      fixedrange: true,
    },
    yaxis: {
      range: [0, Math.max(...y_values) * 1.1],
      showticklabels: false,
      fixedrange: true,
    },
    shapes: [
      {
        type: "line",
        x0: get_athlete_pace(athlete),
        y0: 0,
        x1: get_athlete_pace(athlete),
        yref: "paper",
        y1: 0.9,
        line: {
          color: "orange",
          width: 3,
        },
      },
    ],
    annotations: [
      {
        yref: "paper",
        x: get_athlete_pace(athlete),
        xanchor: "center",
        y: 0.9,
        yanchor: "bottom",
        text: annotation,
        showarrow: false,
      },
    ],
  }

  return <MyPlotly data={[trace1]} layout={layout} />
}

export default PaceHistogram
