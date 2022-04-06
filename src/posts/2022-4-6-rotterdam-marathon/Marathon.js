import React, { useState, useEffect } from "react";
import Slider from 'react-input-slider';
import * as marathonStyles from './marathon.module.scss'

import { MyPlotly } from '../../components/MyPlotly'


function Marathon() {
  const githubUrl = "https://raw.githubusercontent.com/fpgmaas/rotterdam-marathon/python/data/6855879561074155264_480016.json";

  const [jsonData, setJsonData] = useState();
  const [bib, setBib] = useState(null);

  useEffect(() => {
    getGitHubUserWithFetch(githubUrl);
  }, []);

  const getGitHubUserWithFetch = async (githubUrl) => {
    const response = await fetch(githubUrl);
    const jsonData = await response.json();
    setJsonData(jsonData);
  };

  const PageForBib = (bib) => {
    console.log(bib);
    if(bib == null)
    {
      return <p>Please enter a valid bib.</p>
    }
    var athlete = jsonData.find(e => {return e.bib==bib})
    console.log(athlete);
    if (athlete)
    {
      return (
      <div className = {marathonStyles.statsContainer}>
        <div className = {marathonStyles.header}>
          <h2 className = {marathonStyles.athleteFlag}> {athlete.rank} </h2>
          <h2 className = {marathonStyles.athleteName}> {athlete.name} </h2>
          <h2 className = {marathonStyles.athleteRank}> {athlete.rank} </h2>
        </div>
      </div>
      )
    }
    else {
      return <p>Bib not found in the results. Please enter a valid bib.</p>
    }
  }

  return (
    <div className={marathonStyles.myDiv}>
      <input value={bib} onInput={e => setBib(e.target.value)}/>
      <p>{jsonData ? JSON.stringify(jsonData[0]) : 'hello'}</p>
      {jsonData===undefined ? <></> : PageForBib(bib)}
    </div>
  );
}

export default Marathon;