import React from "react"

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive Feedback: {percentage} %</p>
    </div>
  )
}

export default Statistics
