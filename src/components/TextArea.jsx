import React from "react"
import "./TextArea.css"

function TextArea(props) {
  const {header, content} = props.text
  return (
    <div className="text-area-container">
      <h4>{header}</h4>
      <p>
        {content}
      </p>
    </div>
  )
}

export default TextArea
