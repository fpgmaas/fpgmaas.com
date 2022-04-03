import React, { Component } from 'react'
import Loadable from 'react-loadable'

import PropTypes from 'prop-types';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';


const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <blockquote>Loading plotly...</blockquote>
    ),
  timeout: 10000,
})

export const MyPlotly = ({ data, layout, style, config, ...rest }) =>
{

    return (<Plotly
      data={data}
      layout={{
        ...layout,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        autosize: true
      }}
      style={{ width: `100%`, ...style }}
      useResizeHandler
      config={{
        displayModeBar: false,
        showTips: false,
        ...config,
      }}
    ></Plotly>
    )
}
