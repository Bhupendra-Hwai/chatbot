import { useState } from 'react'

function Chatbot({ goHome, openIframe }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')
  }

return (
  <div className="chat-container">

    {/* 🔝 TOP BAR */}
    <div className="top-bar">
      <span>HWAI Chatbot</span>
      <button onClick={goHome}>Back</button>
    </div>

    {/* 📊 DASHBOARD BUTTONS */}
    <div className="chat-nav">
      <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 1</button>
      <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 2</button>
      <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 3</button>
      <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 4</button>
    </div>

    {/* 💬 CHAT AREA */}
    <div className="chat-area">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
        >
          {msg.text}
        </div>
      ))}
    </div>

    {/* ✏️ INPUT */}
    <div className="input-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>

  </div>
)
}

export default Chatbot