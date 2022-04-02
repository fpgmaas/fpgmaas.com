import React, { Component } from 'react'
import Loadable from 'react-loadable'

import PropTypes from 'prop-types';


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

class MyPlotly extends Component {

  render() {
    return (<Plotly
      data={this.props.data}
      layout={{
        width: this.props.width,
        height: this.props.height,
        ...this.props.layout
      }}
    ></Plotly>
    )
  }
}

MyPlotly.propTypes = {
  data: PropTypes.object,
  layout: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
};

MyPlotly.defaultProps = {
  width: 800,
  height: 500
};

export default MyPlotly;

