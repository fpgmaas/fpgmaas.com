import React from "react";
import * as marathonStyles from './marathon.module.scss'
import { MyPlotly } from '../../components/MyPlotly'

const get_athlete_pace = (athlete) =>{
  return athlete.splits.slice(-1)[0].time/60/42.2
}

const SpeedHistogram = ({athlete, data}) => {
  var x = [];
  for (var i = 0; i < 500; i++) {
    x[i] = Math.random();
  }

  var trace = {
    x: data.map(e => get_athlete_pace(e)), //data.map(e => 42.2/e.splits.slice(-1)[0].time*3600),
    type: 'histogram',
    hovertemplate: "pace: %{x} min/km<extra></extra>", 
  };
  var data = [trace];

  var layout = {
    title: {
      text:'Pace distribution'
    },
    xaxis: {
      title: {
        text: 'pace (min/km)',
      },
    },
    yaxis: {
      showgrid: false,
      zeroline: true,
      showline: false,
      showticklabels: false
      },
    shapes: [{
        type: 'line',
        x0: get_athlete_pace(athlete),
        y0: 0,
        x1: get_athlete_pace(athlete),
        yref: 'paper',
        y1: 1,
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
      y: 1,
      yanchor: 'bottom',
      text: 'Athlete pace: ${get_athlete_pace(athlete)}',
      showarrow: false
    }]
  }

  return <MyPlotly data={data} layout = {layout}/>
}

const BibStats = ({ athlete, data }) => {
  const total_athletes = data.length
  const athletes_in_this_category = data.filter(e => {
    return e.category == athlete.category;
  })
  return (
    <div className={marathonStyles.statsContainer}>
      <div className={marathonStyles.header}>
        <div className={marathonStyles.headerRow}>
          <img className={marathonStyles.athleteFlag}
            alt={`${athlete.countryCode}`}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${athlete.countryCode}.svg`} />
          <h2 className={marathonStyles.athleteRank}> {`#${athlete.rank}/${total_athletes}`} </h2>
          <h2 className={marathonStyles.athleteName}> {athlete.name} </h2>
        </div>
        <div className={marathonStyles.headerRow}>
          <h3 className={marathonStyles.athleteRank}> {`Category: ${athlete.category}`} </h3>
          <h3 className={marathonStyles.athleteRank}> {`Category rank: #${athlete.categoryRank}/${athletes_in_this_category.length}`} </h3>
        </div>
      </div>
      <SpeedHistogram athlete = {athlete} data = {data} />
    </div>
  )
}
export default BibStats;