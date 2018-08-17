import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

export const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={props.green ? styles.Button_Green : styles.Button}
    >
      <p className={styles.Text}>{props.text}</p>
    </button>
  )
}

Button.propTypes = {
  green: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}
