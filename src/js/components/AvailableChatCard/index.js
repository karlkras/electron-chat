import React from 'react';

const AvailableChatCard = ({title, description}) => {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={() => {
            }}
            className="btn btn-outline-primary">Join Chat
          </button>
        </div>
      </div>
  )
}
export default AvailableChatCard
