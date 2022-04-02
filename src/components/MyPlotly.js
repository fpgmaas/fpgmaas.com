import React, {Component} from 'react'
import Loadable from 'react-loadable'

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
    data = {this.props.data}
    layout = {this.props.layout}
    ></Plotly>
    )
  }
}

export default MyPlotly;
