import React from "react"
import PropTypes from "prop-types"

const Notification = (props) => {
  const { message } = props
  const checkFeedback = props.children.props.total

  return <div>{checkFeedback === 0 ? <p>{message}</p> : props.children}</div>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification
