import React from "react"
import PropTypes from "prop-types"

const Section = (props) => {
  const { title } = props
  return (
    <div>
      <h2>{title}</h2>
      {props.children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section
