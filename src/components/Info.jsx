import React from "react"
import "./Info.css"
import Button from "./Button"

function Info(props) {
  const { name, title, email } = props
  return (
    <div className="info-container">
      <h1>{name}</h1>
      <h4>{title}</h4>
      <Button email={email}/>
    </div>
  )
}

export default Info
