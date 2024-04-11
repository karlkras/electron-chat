import React from 'react';
import ChatUser from "../ChatUser";
import ChatSearch from "../ChatSearch";

const ChatUserList = ({users}) => {
  return (
    <div className="list-container">
      <ChatSearch/>
      <ul className="items">
        {users.map(aUser => (
          <li key={aUser.id} onClick={() => {
          }} className="item">
            <ChatUser name={aUser.name} image={aUser.image}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ChatUserList;
