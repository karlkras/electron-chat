import React from 'react';

const ChatUser = ({ name, image }) => {
  return (
    <>
      <div className="item-status">
        <img src={image} alt={name}/>
        <span className="status online"></span>
      </div>
      <p className="name-time">
        <span className="name mr-2">{name}</span>
      </p>
    </>
  )
}
export default ChatUser;
