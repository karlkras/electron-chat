import React from 'react'
import image1 from "../../../../resources/images/PinClipart.com_male-clipart_1331433.png";
import image2 from "../../../../resources/images/PinClipart.com_soldier-clipart-black-and_5598468.png";
import ChatMessage from "../ChatMessage";

const ChatMessageList = () => {
  return (
    <div className="chat-container">
      <ul className="chat-box chatContainerScroll">
        <li
          className="chat-left">
          <ChatMessage message={"Some message 1"} image={image1} userName={"Tina Faye"} time={"5h ago"} />
        </li>
        <li
          className="chat-right">
          <ChatMessage message={"Some message 2 again"} image={image2} userName={"Larry David"} time={"5h ago"} />
        </li>
        <li
          className="chat-left">
          <ChatMessage message={"Some message 3 again"} image={image1} userName={"Fred Brown"} time={"5h ago"} />
        </li>
        <li
          className="chat-right">
          <ChatMessage message={"Ah one two three four!"} image={image2} userName={"Tom Jones"} time={"5h ago"} />
        </li>
      </ul>
    </div>
  )
}
export default ChatMessageList
