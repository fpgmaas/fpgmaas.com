import React from "react";
import * as marathonStyles from './marathon.module.scss'
import PaceHistogram from "./PaceHistogram";
import { convert_seconds_to_hms } from "./utils";

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
        <PaceHistogram 
        athlete={athlete} 
        data={data} 
        category_filter = {false}
        title={'Pace distribution'} />
      </div>
      <div className={marathonStyles.plotContainer}>
        <PaceHistogram 
        athlete={athlete} 
        data={data} 
        category_filter = {true}
        title={`Pace distribution within ${athlete.category}`}/>
      </div>
    </div>
  )
}
export default BibStats;