import React from 'react'
import { data, layout } from '../md-posts/plot.json'

import Loadable from 'react-loadable'

const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <div>Loading plotly</div>
    ),
  timeout: 10000,
})

export const MyPlot = ({argument}) => {
    console.log(argument);
    return (
        <Plotly
          data={data}
          layout = {layout}
        />
      );
}