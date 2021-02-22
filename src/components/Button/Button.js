import React from "react"
import PropTypes from "prop-types"
import { btn } from "./Button.module.css"

const Button = ({ option, onLeaveFeedback }) => {
  // console.log(option)
  return (
    <>
      <button className={btn} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </>
  )
}

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default Button
