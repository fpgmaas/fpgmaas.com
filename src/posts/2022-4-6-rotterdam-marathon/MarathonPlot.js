import React, { useState, useEffect } from "react";
import Slider from 'react-input-slider';
import * as marathonStyles from './marathon.module.scss'

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

    if (jsonData.length >0)
    {
    var current_pos;
    const splits = jsonData[0].splits
    const current_split_index = splits.findIndex(split => {
      return split['time'] > time;
    });
    if(current_split_index==0){
      current_pos = splits[0]['distance'] * (time/splits[0]['time'])
      console.log('current_pos')
      console.log(current_pos)
    } else if(current_split_index!=-1) {
      var start_dist = splits[current_split_index-1]['distance'];
      var total_time_current_segment = splits[current_split_index]['time'] - splits[current_split_index-1]['time'];
      var total_dist_current_segment = splits[current_split_index]['distance'] - splits[current_split_index-1]['distance'];
      var time_elapsed_current_segment = time - splits[current_split_index-1]['time'];
      current_pos = start_dist + total_dist_current_segment * (time_elapsed_current_segment/total_time_current_segment);
    } else
    {
      current_pos = splits.slice(-1)[0]['distance']
    }
    setCurrentPositions(current_pos)
  }
  },[jsonData, time])

  return (
    <div className = {marathonStyles.myDiv}>
      ({time})
      ({JSON.stringify(currentPositions)})
      <Slider xmin = {0} xmax = {10*60*60} axis="x" x={time} onChange={({ x }) => setTime(x)} />
      {jsonData ? JSON.stringify(jsonData[0]) : 'hello'}
    </div>
  );
}

export default MarathonPlot;