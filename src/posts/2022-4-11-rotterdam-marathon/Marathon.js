import React, { useState, useEffect } from "react"
import * as marathonStyles from "./marathon.module.scss"

import BibComponent from "./BibComponent"

function Marathon() {
  const githubUrl =
    "https://raw.githubusercontent.com/fpgmaas/sporthive-api-scraper/main/data/6914931831426482176_481627.json"

  const [jsonData, setJsonData] = useState()
  const [bib, setBib] = useState(9)

  useEffect(() => {
    getGitHubUserWithFetch(githubUrl)
  }, [])

  const getGitHubUserWithFetch = async githubUrl => {
    const response = await fetch(githubUrl)
    const jsonData = await response.json()
    setJsonData(jsonData)
  }

  const PageForBib = bib => {
    if (bib == null) {
      return <p>Please enter a valid bib.</p>
    }
    var athlete = jsonData.find(e => {
      return e.bib.toString().toUpperCase() === bib.toString().toUpperCase()
    })
    if (athlete) {
      return <BibComponent athlete={athlete} data={jsonData}></BibComponent>
    } else {
      return <p>Bib not found in the results. Please enter a valid bib.</p>
    }
  }

  return (
    <div className={marathonStyles.myDiv}>
      <div className={marathonStyles.bibInputContainer}>
        <h3 className={marathonStyles.bibInputHeader}> Enter a BIB number: </h3>
        <input
          value={bib}
          onInput={e => setBib(e.target.value)}
          className={marathonStyles.bibInput}
        />
      </div>
      {jsonData === undefined ? <></> : PageForBib(bib)}
    </div>
  )
}

export default Marathon
