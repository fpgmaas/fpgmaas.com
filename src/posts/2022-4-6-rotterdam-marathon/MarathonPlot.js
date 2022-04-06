import React, { useState, useEffect } from "react";
import Slider from 'react-input-slider';
import * as marathonStyles from './marathon.module.scss'

import { MyPlotly } from '../../components/MyPlotly'

function calculate_current_distance_of_athlete(splits, time) {
  var current_pos;
  const current_split_index = splits.findIndex(split => {
    return split['time'] > time;
  });
  if (current_split_index == 0) {
    // still in the first split.
    current_pos = splits[0]['distance'] * (time / splits[0]['time'])
  } else if (current_split_index != -1) {
    // between first split and finish.
    var start_dist = splits[current_split_index - 1]['distance'];
    var total_time_current_segment = splits[current_split_index]['time'] - splits[current_split_index - 1]['time'];
    var total_dist_current_segment = splits[current_split_index]['distance'] - splits[current_split_index - 1]['distance'];
    var time_elapsed_current_segment = time - splits[current_split_index - 1]['time'];
    current_pos = start_dist + total_dist_current_segment * (time_elapsed_current_segment / total_time_current_segment);
  } else {
    // finished.
    current_pos = splits.slice(-1)[0]['distance']
  }
  return current_pos;
}


function MarathonPlot() {
  const githubUrl = "https://raw.githubusercontent.com/fpgmaas/rotterdam-marathon/python/data/6855879561074155264_480016.json";

  const [jsonData, setJsonData] = useState({});
  const [time, setTime] = useState(0);
  const [currentPositions, setCurrentPositions] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch(githubUrl);
  }, []);

  const getGitHubUserWithFetch = async (githubUrl) => {
    const response = await fetch(githubUrl);
    const jsonData = await response.json();
    setJsonData(jsonData);
  };

  useEffect(() => {
    if (jsonData.length > 0) {
      setCurrentPositions(
        jsonData.map(athlete => {
          return {
            bib: athlete.bib,
            distance: calculate_current_distance_of_athlete(athlete.splits, time)
          }
        })
      )
    }
  }, [jsonData, time])


  function get_plot_data(currentPositions) {
    if (currentPositions.length > 0) {
      return [{
        y: currentPositions.map(e => { return e.distance }),
        x: currentPositions.map(e => { return time }),
        mode: 'markers',
        type: 'scatter',
        marker: {
          color: 'rgb(17, 157, 255)',
          size: 1,
        }
      }]
    }
  }

  return (
    <div className={marathonStyles.myDiv}>
      ({time})
      <Slider xmin={0} xmax={10 * 60 * 60} axis="x" x={time} onChange={({ x }) => setTime(x)} />
      ({JSON.stringify(currentPositions[0])})
      {jsonData ? JSON.stringify(jsonData[0]) : 'hello'}
      <MyPlotly data={get_plot_data(currentPositions)} layout={{height: 1000}}></MyPlotly>
    </div>
  );
}

export default MarathonPlot;