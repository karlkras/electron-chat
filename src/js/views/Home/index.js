import React, {useEffect} from 'react';
import JoinedChatList from "../../components/JoinedChatList";
import AvailableChatList from "../../components/AvailableChatList";
import NameContainer from "../../components/NameContainer";
import { fetchChats } from "../../actions/chat";
import { useDispatch, useSelector } from "react-redux";


const chatStatusImg = "https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg";

const chatItems = [
  {title: "Chat 1", description: "Some Chat 1 Description", statusImage: chatStatusImg},
  {title: "Chat 2", description: "Some Chat 2 Description", statusImage: chatStatusImg},
  {title: "Chat 3", description: "Some Chat 3 description", statusImage: chatStatusImg},
  {title: "Chat 4", description: "Some Chat 4 description", statusImage: chatStatusImg}];

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(({chats}) => chats.items)
  useEffect(()  => {
    dispatch(fetchChats())
  }, [dispatch])


  return (
    <div className="row no-gutters fh">
      <JoinedChatList chats={chats}/>
      <div className="col-9 fh">
        <NameContainer name={'Choose your channel'}/>
        <AvailableChatList chats={chats}/>
      </div>
    </div>
  )
}
export default Home
