import React from "react"
import "./Button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Button(props) {
  const { email } = props
  const link = `mailto:${email}`
  return (
    <a className="button" href={link}>
      <FontAwesomeIcon className="mail-icon" icon={faEnvelope} />
      <h4>Email</h4>
    </a>
  )
}

export default Button
