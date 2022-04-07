import React from "react";
import * as marathonStyles from './marathon.module.scss'
import { MyPlotly } from '../../components/MyPlotly'
import * as d3 from "d3"



const generate_hover_text = (e, paces) => {
  return (
    'pace: ' + convert_number_to_minute_and_seconds(e.x0) + ' - ' + convert_number_to_minute_and_seconds(e.x1) +
    '<br>Finish time: ' + convert_seconds_to_hms(42.195*e.x0*60) + ' - ' + convert_seconds_to_hms(42.195*e.x1*60) +
    '<br>' + 'Fastest ' + calculate_pace_percentage(e.x1, paces).toString() + '%'
  )
}

const zeroPad = (num, places) => String(num).padStart(places, '0')

const convert_number_to_minute_and_seconds = (number) => {
  // convert e.g. 4.5 minutes to 4:30.
  var decimal = number - Math.floor(number)
  var seconds = Math.round(decimal * 60)
  return Math.floor(number).toString() + ':' + zeroPad(seconds.toString(), 2)
}

const convert_seconds_to_hms = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

const calculate_pace_percentage = (pace, paces) => {
  var fraction_slower = paces.filter(e => e > pace).length / paces.length
  return Math.round((1 - fraction_slower) * 10000) / 100
}

function getAllNumbersBetween(x, y) {
  var numbers = [];
  for (var i = x; i < y; i++) {
    numbers.push(i);
  }
  return numbers;
}

const SpeedHistogram = ({ athlete, data }) => {

  var paces = data.map(e => get_athlete_pace(e));

  var histGenerator = d3.bin()
    .domain([Math.min(...paces), Math.max(...paces)])
    .thresholds(50);

  var arr = histGenerator(paces)
  console.log(arr);


  var xValue = arr.map(e => {
    return 0.5 * (
      (Math.floor(e.x0 * 10) / 10) +
      (Math.ceil(e.x1 * 10) / 10)
    )
  });
  console.log('xValue!', xValue)


  var yValue = arr.map(e => { return e.length });
  console.log('yvalue!', yValue)

  var trace1 = {
    x: xValue,
    y: yValue,
    hovertext: arr.map(e => { return generate_hover_text(e, paces) }),
    hoverinfo: 'text',
    type: 'bar',
    marker: {
      color: 'rgb(158,202,225)',
      opacity: 1,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5
      }
    }
  };

  var data = [trace1];

  var annotation = (
    'pace: ' + convert_number_to_minute_and_seconds(get_athlete_pace(athlete)) + ' min/km<br>' +
    'Fastest ' + calculate_pace_percentage(get_athlete_pace(athlete), paces).toString() + '%'
  )
  var x_tick_vals = getAllNumbersBetween(Math.floor(Math.min(...paces)), Math.ceil(Math.max(...paces)))
  var x_tick_text = x_tick_vals.map(e => { return convert_number_to_minute_and_seconds(e) })

  var layout = {
    title: { text: 'Pace distribution' },
    barmode: 'stack',
    xaxis: {
      tickmode: "array",
      tickvals: x_tick_vals,
      ticktext: x_tick_text
    },
    yaxis: {
      range: [0, Math.max(...yValue) * 1.1],
      showticklabels: false
    },
    shapes: [{
      type: 'line',
      x0: get_athlete_pace(athlete),
      y0: 0,
      x1: get_athlete_pace(athlete),
      yref: 'paper',
      y1: .9,
      line: {
        color: 'orange',
        width: 3,
      }
    }
    ],
    annotations: [{
      yref: 'paper',
      x: get_athlete_pace(athlete),
      xanchor: 'center',
      y: .9,
      yanchor: 'bottom',
      text: annotation,
      showarrow: false
    }]
  };

  return <MyPlotly data={data} layout={layout} />
}

const BibStats = ({ athlete, data }) => {
  const total_athletes = data.length
  const athletes_in_this_category = data.filter(e => {
    return e.category == athlete.category;
  })
  console.log(athlete);
  return (
    <div className={marathonStyles.statsContainer}>
      <div className={marathonStyles.header}>
        <div className={marathonStyles.headerColumn}>
          <div className={marathonStyles.headerItem}>
            <img className={marathonStyles.athleteFlag}
              alt={`${athlete.countryCode}`}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${athlete.countryCode}.svg`} />
          </div>
          <div className={marathonStyles.headerItem}>
            <div className={marathonStyles.athleteRankContainer}>
              <span className={marathonStyles.athleteRankPrefix}>Rank: </span>
              <span className={marathonStyles.athleteRank}> {`#${athlete.rank}`}</span>
              <span className={marathonStyles.athleteRankSub}>{`/${total_athletes}`}</span>
            </div>
          </div>
        </div>
        <div className={marathonStyles.headerColumn}>
          <div className={marathonStyles.headerItem}>
            <p className={marathonStyles.athleteName}> {athlete.name} </p>
          </div>
          <div className={marathonStyles.headerItem}>
            <p className={marathonStyles.athleteCategory}> {`Category: ${athlete.category}`} </p>
          </div>
        </div>
        <div className={marathonStyles.headerColumn}>
          <div className={marathonStyles.headerItem}>
            <p className={marathonStyles.finishTime}> {'Finish time: ' + convert_seconds_to_hms(athlete.chipTime)} </p>
          </div>
          <div className={marathonStyles.headerItem}>
            <div className={marathonStyles.athleteRankContainer}>
              <span className={marathonStyles.athleteRankPrefix}>Cat. rank: </span>
              <span className={marathonStyles.athleteRank}> {`#${athlete.categoryRank}`}</span>
              <span className={marathonStyles.athleteRankSub}>{`/${athletes_in_this_category.length}`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={marathonStyles.plotContainer}>
        <SpeedHistogram athlete={athlete} data={data} />
      </div>
    </div>
  )
}
export default BibStats;