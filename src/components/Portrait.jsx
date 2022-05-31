import React from "react"
import "./Portrait.css"

function Portrait(props) {
  const { portrait } = props
  return <img className="portrait" src={portrait} alt="Portrait" />
}

export default Portrait
