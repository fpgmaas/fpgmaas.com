import React from "react"
import Loadable from "react-loadable"

import FadeLoader from "react-spinners/FadeLoader"

import * as styles from "./plotly.module.scss"

const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <div className={styles.loadingDiv}>
        <p>Loading plot...</p>
        <FadeLoader color={"#004080"} size={50} />
      </div>
    ),
  timeout: 10000,
})

/**
 * Take the data and layout of an existing plotly graph, and turn it into a reactive plot for use in a blog post.
 * More specifically:
 *  - The plot width is ignored, and instead the plot is configured for dynamic resizing.
 *  - The title is removed from the plot and added as a h3 above the plot to enable dynamic resizing of the title.
 *  - The background is removed from the plot.
 *  - The margin is changed to preset values.
 */
export const MyPlotly = ({ data, layout, style, config, ...rest }) => {
  let { width, margin, title, ...newlayout } = layout

  newlayout = {
    ...newlayout,
    margin: {
      l: 30,
      r: 30,
      b: 80,
      t: 20,
    },
  }

  return (
    <div>
      {title ? (
        <h3 className={styles.plotTitle}>
          {" "}
          {title.text.replace("<br>", " ")}{" "}
        </h3>
      ) : null}
      <Plotly
        data={data}
        layout={{
          ...newlayout,
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          autosize: true,
        }}
        style={{ width: `100%`, ...style }}
        useResizeHandler
        config={{
          displayModeBar: false,
          showTips: false,
          ...config,
        }}
      ></Plotly>
    </div>
  )
}
