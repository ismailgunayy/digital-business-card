import React from "react"
import "./Info.css"
import Portrait from "../images/portrait.jpeg"
import Button from "./Button"

function Info(props) {
  const { name, title } = props
  return (
    <div className="info-container">
      <img src={Portrait} alt="Portrait" />
      <h1>{name}</h1>
      <h4>{title}</h4>
      <Button />
    </div>
  )
}

export default Info
