import React from "react"

const Section = (props) => {
  const { title } = props
  return (
    <div>
      <h2>{title}</h2>
      {props.children}
    </div>
  )
}

export default Section
