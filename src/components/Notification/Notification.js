import React from "react"

const Notification = (props) => {
  const { message } = props
  const checkFeedback = props.children.props.total

  return <div>{checkFeedback === 0 ? <p>{message}</p> : props.children}</div>
}

export default Notification
