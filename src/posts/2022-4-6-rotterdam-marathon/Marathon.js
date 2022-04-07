import React, { useState, useEffect } from "react";
import Slider from 'react-input-slider';
import * as marathonStyles from './marathon.module.scss'

import BibStats from "./BibStats";

function Marathon() {
  const githubUrl = "https://raw.githubusercontent.com/fpgmaas/rotterdam-marathon/python/data/6855879561074155264_480016.json";

  const [jsonData, setJsonData] = useState();
  const [bib, setBib] = useState(3);

  useEffect(() => {
    getGitHubUserWithFetch(githubUrl);
  }, []);

  const getGitHubUserWithFetch = async (githubUrl) => {
    console.log('FETCHING! -------------- ')
    const response = await fetch(githubUrl);
    const jsonData = await response.json();
    console.log(jsonData[0]);
    setJsonData(jsonData);
  };

  const PageForBib = (bib) => {
    console.log(bib);
    if (bib == null) {
      return <p>Please enter a valid bib.</p>
    }
    var athlete = jsonData.find(e => { return e.bib == bib })
    console.log(athlete);
    if (athlete) {
      return <BibStats athlete={athlete} data={jsonData}></BibStats>
    }
    else {
      return <p>Bib not found in the results. Please enter a valid bib.</p>
    }
  }

  return (
    <div className={marathonStyles.myDiv}>
      <div className={marathonStyles.bibInputContainer}>
        <h3 className={marathonStyles.bibInputHeader}> Enter a BIB number: </h3>
        <input value={bib} onInput={e => setBib(e.target.value)} className={marathonStyles.bibInput} />
      </div>
      {jsonData === undefined ? <></> : PageForBib(bib)}
    </div>
  );
}

export default Marathon;