import React from "react"
import "./Button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Button() {
  return (
    <div className="button">
      <FontAwesomeIcon className="mail-icon" icon={faEnvelope} />
      <h4>Email</h4>
    </div>
  )
}

export default Button
