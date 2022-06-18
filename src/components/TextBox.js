import React, { Component } from 'react'

import * as textBoxStyles from './textbox.module.scss'

import Emoji from './Emoji'

const emoji = (type) => {
  if (['warn','warning'].includes(type)) {
    return <Emoji symbol= "⚠️"/>
  }
  else if (['info'].includes(type)) {
    return <Emoji symbol= "ℹ️"/>
  }
  else {
    return ""
  }
}

const style = (type) => {
  if (['warn','warning'].includes(type)) {
    return textBoxStyles.warningBox
  }
  else if (['info'].includes(type)) {
    return textBoxStyles.infoBox
  }
  else {
    return ""
  }
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
  <div className = {[textBoxStyles.container, style(type)].join(' ')}>
    <span>
    {emoji(type)} {text}
    </span>
  </div>
  )
}

export default TextBox;