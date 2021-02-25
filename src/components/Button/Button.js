import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.css"
const Button = ({ option, onLeaveFeedback }) => {
  return (
    <button className={styles.btn} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  )
}

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default Button
