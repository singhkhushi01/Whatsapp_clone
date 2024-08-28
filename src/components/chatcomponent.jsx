import React, { useState } from 'react';
import "./chatcompo.css";
import imge from "./user.png";
import plus from "./plus.png"



const Chat = ({ sendMessage, selectedChat }) => {
    const [message, setMessage] = useState("");

    const handleMessage = () => {
        if (message) {
            sendMessage(message);
            setMessage('');
          }
    }

    const handleKeyDown=(e)=>{
        if(e.key=="Enter" && e.shiftKey){

        }
        else if(e.key=="Enter" && !e.shiftKey){
            e.preventDefault();
            handleMessage(e);
        }
    }

    return (
        <div className='Chatcomponent'>
            <div className='chatheader'>
                <img src={imge}></img>
                {selectedChat.name}
            </div>
            <div className='Chatmessage'>
                {selectedChat.messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className='chatfooter'>
                <img src={imge}></img>
                <img src={plus}></img>
                <input
                    type='text'
                    id='msgtype'
                    placeholder='Type a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}>
                </input>
                <button onClick={handleMessage}>Send</button>
                {/* <img src={imge}></img> */}
            </div>
        </div>
    )
}

export default Chat;