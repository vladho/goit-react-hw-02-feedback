import React from "react"
import PropTypes from "prop-types"
import styles from "./FeedbackOptions.module.css"
import Button from "../Button/Button"

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <>
      {option.map((el) => (
        <Button key={el} option={el} onLeaveFeedback={onLeaveFeedback} />
      ))}
    </>
  )
}

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
