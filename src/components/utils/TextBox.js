import React from "react"
import * as styles from "./textbox.module.scss"
import Emoji from "./Emoji"

const format = {
  warn: {
    emoji: <Emoji symbol="⚠️" />,
    style: styles.warningBox,
  },
  info: {
    emoji: <Emoji symbol="ℹ️" />,
    style: styles.infoBox,
  },
}

/**
 * Returns a textBox with styling for info or warning boxes.
 *
 * @param type 'warn' or 'info'
 * @param text Should be a <span> element with the text to be displayed in the textBox
 * @returns
 */
const TextBox = ({ type, text }) => {
  return (
    <div className={[styles.container, format[type].style].join(" ")}>
      <span>
        {format[type].emoji}
        &nbsp;
        {text}
      </span>
    </div>
  )
}

export default TextBox
