import React from 'react';
import AvailableChatCard from "../AvailableChatCard";

const AvailableChatList = ({chats}) => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {false &&
          <div className="container-fluid">
            <div className="alert alert-warning">No chats to join :(</div>
          </div>}
        {chats.map((item, index) => (
          <div key={item.id} className="col-lg-3 col-md-6 mb-3">
            <AvailableChatCard title={item.name} description={item.description}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AvailableChatList
