import "./MessagesScreen.css"
import { useState } from "react"
import { messages } from "../data/homepagedata"

const ChatScreen = ({ chat, onBack }) => {
  const [conversation, setConversation] = useState(chat.conversation)
  const [input, setInput] = useState("")
  const [connected, setConnected] = useState(chat.connected)

  const sendMessage = (e) => {
    e.preventDefault()
    if (input.trim() === "") return
    const newMessage = {
      id: conversation.length + 1,
      sender: "me",
      text: input,
      time: "Just now",
    }
    setConversation(prev => [...prev, newMessage])
    setInput("")
  }

  return (
    <div className="chat-screen">

      {/* Chat header */}
      <div className="chat-header">
        <button className="chat-back-btn" onClick={onBack}>˂</button>
        <div className="chat-header-avatar" style={{ background: chat.color }}>
          {chat.initials}
        </div>
        <div className="chat-header-info">
          <p className="chat-header-name">{chat.name}</p>
          <p className="chat-header-status">
            {chat.online ? "Online" : "Offline"}
          </p>
        </div>
        {connected ? (
          <span className="chat-connected-badge">Connected ✓</span>
        ) : (
          <button
            className="chat-connect-btn"
            onClick={() => setConnected(true)}
          >
            Connect
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {conversation.map(msg => (
          <div
            key={msg.id}
            className={msg.sender === "me" ? "chat-bubble me" : "chat-bubble them"}
          >
            <p className="chat-bubble-text">{msg.text}</p>
            <p className="chat-bubble-time">{msg.time}</p>
          </div>
        ))}
      </div>

      {/* Input */}
      <form className="chat-input-row" onSubmit={sendMessage}>
        <input
          className="chat-input"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chat-send-btn" type="submit">→</button>
      </form>

    </div>
  )
}

const MessagesScreen = () => {
  const [messageList, setMessageList] = useState(messages)
  const [activeChat, setActiveChat] = useState(null)
  const [search, setSearch] = useState("")

  const openChat = (message) => {
    setMessageList(prev =>
      prev.map(m => m.id === message.id ? { ...m, unread: 0 } : m)
    )
    setActiveChat(message)
  }

  const filteredMessages = messageList.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  )

  if (activeChat) {
    return <ChatScreen chat={activeChat} onBack={() => setActiveChat(null)} />
  }

  const unconnected = messageList.filter(m => !m.connected)

  return (
    <div className="messages-screen">
      <div className="messages-header">
        <div className="messages-header-top">
          <h1>Messages</h1>
          <button className="messages-new-btn">+</button>
        </div>
        <p className="messages-sub">Don't be afraid to reach out</p>
        <div className="messages-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Connection requests strip 
      {unconnected.length > 0 && (
        <div className="requests-strip">
          <div className="requests-left">
            <div className="requests-avatars">
              {unconnected.slice(0, 3).map(m => (
                <div key={m.id} className="req-av" style={{ background: m.color }}>
                  {m.initials}
                </div>
              ))}
            </div>
            <div>
              <p className="requests-text">{unconnected.length} connection requests</p>
              <p className="requests-sub">Students want to connect with you</p>
            </div>
          </div>
          <span className="requests-arrow">›</span>
        </div>
      )}*/}

      <p className="messages-section-title">Recent</p>
      <div className="messages-list">
        {filteredMessages.map(message => (
          <div
            key={message.id}
            className="message-card"
            onClick={() => openChat(message)}
          >
            <div className="message-avatar-wrap">
              <div className="message-avatar" style={{ background: message.color }}>
                {message.initials}
              </div>
              {message.online && <div className="message-online-dot" />}
            </div>
            <div className="message-info">
              <p className={message.unread > 0 ? "message-name unread-name" : "message-name"}>
                {message.name}
              </p>
              <p className={message.unread > 0 ? "message-preview unread-preview" : "message-preview"}>
                {message.preview}
              </p>
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