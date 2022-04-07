export const get_athlete_pace = (athlete) => {
    return athlete.splits.slice(-1)[0].time / 60 / 42.2
  }