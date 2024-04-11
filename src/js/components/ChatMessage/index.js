import React from 'react';
import image1 from "../../../../resources/images/PinClipart.com_male-clipart_1331433.png";

const ChatMessage = ({image, message, time, userName}) => {
  return (
    <>
      <div className="chat-avatar">
        <img
          src={image}
          alt="Retail Admin"/>
        <div className="chat-name">{userName}</div>
      </div>
      <div className="chat-text-wrapper">
        <span className="chat-text">{message}</span>
        <span className="chat-spacer"></span>
        <div className="chat-hour">{time}</div>
      </div>
    </>
  )
}
export default ChatMessage;
