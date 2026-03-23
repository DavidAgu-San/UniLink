import "./MessagesScreen.css";
import { useState } from "react";
import {messages} from "../data/homepagedata";

const MessagesScreen = () => {
    const [messageList, setMessageList] = useState(messages);
    
    return (
        <div className="messages-screen">
            <div className="messages-header">
                <h1>Messages</h1>
                <p className="messages-sub">{messageList.length} chats</p>
            </div>
            
            <div className="messages-list">
                {messageList.map(message => (
                    <div key={message.id} className="message-card">
                        <div className="message-avatar">{message.initials}</div>
                        <div className="message-info">
                            <p className="message-name">{message.name}</p>
                            <p className="message-preview">{message.preview}</p>
                        </div>
                        <div className="message-right">
                            <p className="message-time">{message.time}</p>
                            {message.unread > 0 && (
                            <div className="unread-badge">{message.unread}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default MessagesScreen;