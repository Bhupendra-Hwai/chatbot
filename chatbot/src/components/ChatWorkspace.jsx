import { useEffect, useRef, useState } from "react";

export default function ChatWorkspace({
  onClose,
  onDashboardSelect,
  aiReplies,
  dashboardItems,
  starterHistory,
  initialChatMessage,
}) {
  const [messages, setMessages] = useState([initialChatMessage]);
  const [historyItems, setHistoryItems] = useState(starterHistory);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [sidebarView, setSidebarView] = useState("history");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (presetText) => {
    const text = (presetText ?? input).trim();
    if (!text) return;

    setInput("");
    setMessages((current) => [...current, { role: "user", text }]);
    setHistoryItems((current) => [text, ...current.filter((item) => item !== text)].slice(0, 8));
    setTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 900 + Math.random() * 700));
    const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
    setTyping(false);
    setMessages((current) => [...current, { role: "ai", text: reply }]);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = () => {
    setMessages([initialChatMessage]);
    setTyping(false);
    setInput("");
  };

  return (
    <div className="chat-overlay">
      <div className="chat-workspace">
        <aside className="chat-sidebar">
          <div className="chat-sidebar-top">
            <div>
              <div className="sidebar-title">AI Workspace</div>
              <div className="sidebar-subtitle">Switch between chat history and dashboards</div>
            </div>
            <button className="chat-close" onClick={onClose} aria-label="Close chat workspace">
              x
            </button>
          </div>

          <div className="sidebar-switcher">
            <button
              className={`sidebar-switch-btn ${sidebarView === "history" ? "active" : ""}`}
              onClick={() => setSidebarView("history")}
            >
              History
            </button>
            <button
              className={`sidebar-switch-btn ${sidebarView === "dashboards" ? "active" : ""}`}
              onClick={() => setSidebarView("dashboards")}
            >
              Dashboards
            </button>
          </div>

          <div className="sidebar-panel">
            {sidebarView === "history" ? (
              <div className="sidebar-list">
                {historyItems.map((item) => (
                  <button
                    key={item}
                    className="sidebar-item history-item"
                    onClick={() => sendMessage(item)}
                  >
                    <span className="sidebar-item-title">{item}</span>
                    <span className="sidebar-item-meta">Open in chat</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="sidebar-list">
                {dashboardItems.map((item) => (
                  <button
                    key={item.name}
                    className="sidebar-item dashboard-item"
                    onClick={() => onDashboardSelect(item.name)}
                  >
                    <span className="sidebar-item-title">{item.name}</span>
                    <span className="sidebar-item-copy">{item.detail}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </aside>

        <section className="chat-main">
          <div className="chat-main-header">
            <div className="chat-header-left">
              <div className="chat-avatar">AI</div>
              <div>
                <div className="chat-title">AI Analytics Assistant</div>
                <div className="chat-subtitle">Online now - ChatGPT-style workspace</div>
              </div>
            </div>
            <button className="new-chat-btn" onClick={startNewChat}>
              New Chat
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`msg ${message.role}`}>
                <div className="msg-avatar">{message.role === "ai" ? "AI" : "U"}</div>
                <div className="msg-bubble">{message.text}</div>
              </div>
            ))}

            {typing && (
              <div className="msg ai">
                <div className="msg-avatar">AI</div>
                <div className="msg-bubble">
                  <div className="typing-indicator"><span /><span /><span /></div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-shell">
            <div className="chat-input-row">
              <textarea
                className="chat-input"
                placeholder="Message AI Analytics Assistant..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                autoFocus
              />
              <button className="chat-send" onClick={() => sendMessage()} aria-label="Send message">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <div className="chat-input-footnote">Use the left switcher to move between conversation history and dashboards.</div>
          </div>
        </section>
      </div>
    </div>
  );
}
