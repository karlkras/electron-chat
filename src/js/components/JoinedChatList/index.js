import React from 'react';
import JoinedChatItem from "../JoinedChatItem";
import ChatSearch from "../ChatSearch";
import {useNavigate } from "react-router-dom";

const JoinedChatList = ({chats}) => {
  const navigate = useNavigate();

  return (
    <div className="col-3 fh">
      <div className="list-container">
        <ChatSearch/>
        <ul className="items">
          {chats.map((item) => (
              <li key={item.id} onClick={() => {navigate(`/chat/${item.id}`)}} className="item">
                <JoinedChatItem title={`Some ${item.name}`} statusImg={item.image}/>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}
export default JoinedChatList
