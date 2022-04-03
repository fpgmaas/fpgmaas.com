import React, { Component } from 'react'
import Loadable from 'react-loadable'

import PropTypes from 'prop-types';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import ClipLoader from "react-spinners/ClipLoader";

import * as plotlyStyles from './plotly.module.scss'



const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <div className={plotlyStyles.loadingDiv}>
        <p>Loading plot...</p>
        <ClipLoader color={"#004080"} size={50} />
      </div>
    ),
  timeout: 10000,
})

export const MyPlotly = ({ data, layout, style, config, ...rest }) =>
{
    let {width, ...newlayout} = layout
    return (<Plotly
      data={data}
      layout={{
        ...newlayout,
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
