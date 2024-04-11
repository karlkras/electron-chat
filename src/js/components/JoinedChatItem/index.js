import React from 'react';

const JoinedChatItem = ({statusImg, title}) => {


  return (
    <>
      <div className="item-status">
        <img
          src={statusImg}
          alt={title}
        />
        <span className="status online"></span>
      </div>
      <p className="name-time">
        <span className="name mr-2">{title}</span>
      </p>
    </>
  )
}
export default JoinedChatItem
