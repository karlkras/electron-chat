import React from 'react'

const ViewTitle = ({prompt, buttonText}) => {
  return (
    <div className="chat-name-container">
      <span className="name">{prompt}</span>
      <a
        href="/"
        className="btn btn-primary btn-sm back-button">{buttonText}</a>
    </div>
  )
}
export default ViewTitle
