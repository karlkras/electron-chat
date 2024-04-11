import React from 'react';
import NameContainer from "../../components/NameContainer";
import image1 from "../../../../resources/images/PinClipart.com_male-clipart_1331433.png";
import image2 from "../../../../resources/images/PinClipart.com_soldier-clipart-black-and_5598468.png";
import ChatUserList from "../../components/ChatUserList";
import ChatMessageList from "../../components/ChatMessageList";
import {useParams} from "react-router-dom";

const testUserList = [{name: "Fred Jones", image: image1, id: 0 },
  {name: "Tina Faye", image: image2, id: 1 },
  {name: "Larry David", image: image2, id: 2 }

]

const Chat = () => {
  const { id } = useParams();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList users={testUserList} />
      </div>
      <div className="col-9 fh">
        <NameContainer name={`Joined Channel ${ id }`} />
        <ChatMessageList />
      </div>
    </div>
  )
}
export default Chat;
