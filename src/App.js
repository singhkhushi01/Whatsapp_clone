import './App.css';
import Sidebar from './components/sidebar';
import Chat from './components/chatcomponent';
import io from "socket.io-client";//import client side socket.io for real time communication
import { useEffect, useState } from 'react';

const socket = io('http://localhost:8080');//url connection
function App() {

  const[chats,setChats]=useState([
    {
      id:1,
      name:"Khushi",
      message:"",
      messages:[""]
    },
    {
      id:2,
      name:"Keshav",
      message:"",
      messages:[""]
    }
  ]);
  const[selectedChat,setSelectedChat]=useState(chats[0]);

  //for receiving messages
  useEffect(() => {
   socket.on("message",(message)=>{
    const newChats=chats.map((chat=>{
      if(chat.id===message.chatId){
        return{
          ...chat,
          messages: [...chat.messages, message.text],
        }
      };
      return chat;
    }));
    setChats(newChats);
   });
  }, [chats])
  
  const sendMessage=(text)=>{
    const message={chatId:selectedChat.id,text,sender:"me"};
    socket.emit("sendMessage",message);
    setSelectedChat(prev => ({
      ...prev,
      messages: [...prev.messages, text],
    }));
  };
  

  return (
    <div className="app">
      <Sidebar chats={chats} selectChat={setSelectedChat} />
      <Chat selectedChat={selectedChat} sendMessage={sendMessage} />
     
    </div>
  );
};

export default App;
