import React from 'react';
import "./sidebar.css";
import imge from "./user.png";

const Sidebar = ({ chats, selectChat }) => {

    return (
        <div className='Sidebar'>
            <div className='header'>
                <img src={imge}></img>
            </div>
            <div className='header2'>
                <div id='search'>
                    <input type='text' id='searchinput' placeholder='Search' autoComplete='off'></input>

                </div>
                <div className='btn'>
                    <button>All</button>
                    <button>Unread</button>
                    <button>Groups</button>
                </div>

            </div>

            <div className='Chatlist'>
                {chats.map(chat => (
                    <div key={chat.id} className="chat-list-item" onClick={() => selectChat(chat)}>
                        <img src={imge}></img>
                        <div className='chatting'>
                            <div className="chat-name">{chat.name}</div>
                            <div className="chat-message">{chat.message}</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;