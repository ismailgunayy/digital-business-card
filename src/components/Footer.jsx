import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer(props) {
  const {linkedInURL, gitHubURL} = props
  return (
    <div className="footer-container">
      <a href={linkedInURL}>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </a>
      <a href={gitHubURL}>
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
    </div>
  )
}

export default Footer
