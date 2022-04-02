import React from 'react'
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
    let jsonData = require('../posts/2022-1-1/plot.json');
    console.log(jsonData);
    return (
        <Plotly
          data={jsonData.data}
          layout = {jsonData.layout}
        />
      );
}