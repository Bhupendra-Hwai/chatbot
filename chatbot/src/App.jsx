import { useState, useRef, useEffect } from "react";
import "./index.css";

const modules = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, color:"#6C63FF", bg:"rgba(108,99,255,0.12)", title:"Competitor Analysis", desc:"Deep insights into market competitors and their strategies" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, color:"#9B59B6", bg:"rgba(155,89,182,0.12)", title:"Enrollment Trends", desc:"Real time analysis of enrollment patterns and forecasting" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, color:"#E67E22", bg:"rgba(230,126,34,0.12)", title:"Market Engagers", desc:"Identify and engage key market segments effectively" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, color:"#1ABC9C", bg:"rgba(26,188,156,0.12)", title:"Plan Comparison", desc:"AI powered comparative analysis of insurance plans" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, color:"#F39C12", bg:"rgba(243,156,18,0.12)", title:"Winning Plays", desc:"Strategic recommendations based on successful patterns" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>, color:"#3498DB", bg:"rgba(52,152,219,0.12)", title:"STARS", desc:"Medicare Star Ratings analysis and optimization" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, color:"#E74C3C", bg:"rgba(231,76,60,0.12)", title:"Landscape Reports", desc:"Comprehensive market landscape visualization" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, color:"#9B59B6", bg:"rgba(155,89,182,0.12)", title:"Producer Insights", desc:"Performance analytics and producer effectiveness metrics" },
];

const stats = [
  { value:"8", label:"AI Modules", cls:"" },
  { value:"24/7", label:"Active Monitoring", cls:"" },
  { value:"Real-time", label:"Data Processing", cls:"realtime" },
  { value:"99.9%", label:"Accuracy Rate", cls:"" },
];

const AI_REPLIES = [
  "I've analyzed your query across all 8 analytics modules. The data shows strong momentum in the mid-market segment this quarter.",
  "Based on current enrollment trends and competitor positioning, I recommend focusing on the segments showing the highest engagement rates.",
  "The STARS analysis indicates a 12% improvement opportunity in the Medicare rating optimization pipeline.",
  "Competitor intelligence shows 3 key players have shifted strategy in the last quarter. Want me to run a detailed comparison?",
  "Real-time market data suggests the winning play is to target underserved B and C tier segments before Q4.",
  "I've cross-referenced the landscape reports with producer performance metrics and the correlation is significant. Shall I visualize it?",
  "Plan comparison analysis complete. The optimized tier structure could reduce churn by an estimated 18%.",
];

const dashboardItems = [
  { name: "Enrollment Overview", detail: "Live forecasting for application, activation, and churn signals." },
  { name: "Competitor Radar", detail: "Track competitor moves, pricing shifts, and recent market pushes." },
  { name: "Producer Performance", detail: "Compare producer output, response time, and conversion quality." },
  { name: "Stars Optimization", detail: "Prioritize the measures with the highest ratings lift potential." },
];

const starterHistory = [
  "Q4 market trend summary",
  "Competitor movement analysis",
  "Enrollment risk review",
  "Producer performance snapshot",
];

function OrbitalCore() {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <>
      <svg className="core-svg" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 55 10 A 45 45 0 0 1 95 38" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 90 70 A 45 45 0 0 1 25 85" stroke="#9B59B6" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 18 40 A 45 45 0 0 1 55 10" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      </svg>
      <svg className="spokes-svg" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="55" r="20" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.25" />
        {spokes.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 55 + 22 * Math.cos(rad);
          const y1 = 55 + 22 * Math.sin(rad);
          const x2 = 55 + 38 * Math.cos(rad);
          const y2 = 55 + 38 * Math.sin(rad);

          return (
            <g key={angle}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00D4FF" strokeWidth="1.2" opacity="0.65" />
              <circle cx={x2} cy={y2} r="3" fill="#00D4FF" opacity="0.9" />
              <circle cx={x2} cy={y2} r="5.5" fill="none" stroke="#00D4FF" strokeWidth="0.8" opacity="0.35" />
            </g>
          );
        })}
      </svg>
    </>
  );
}

function ChatWorkspace({ onClose }) {
  const initialMessage = {
    role: "ai",
    text: "Hello! I'm your AI Analytics assistant. Ask me about trends, competitors, dashboards, or performance signals.",
  };

  const [messages, setMessages] = useState([initialMessage]);
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
    const reply = AI_REPLIES[Math.floor(Math.random() * AI_REPLIES.length)];
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
    setMessages([initialMessage]);
    setTyping(false);
    setInput("");
  };

  return (
    <div className="chat-overlay" onClick={(event) => event.target === event.currentTarget && onClose()}>
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
                    onClick={() => sendMessage(`Show me the ${item.name} dashboard insights.`)}
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
                <div className="chat-subtitle">Online now · ChatGPT-style workspace</div>
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

export default function App() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const rippleId = useRef(0);
  const clickTimeout = useRef(null);

  const handleHubClick = () => {
    setClicked(true);
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => setClicked(false), 600);

    const id = rippleId.current++;
    setRipples((current) => [...current, id]);
    setTimeout(() => setRipples((current) => current.filter((item) => item !== id)), 1000);
    setTimeout(() => setChatOpen(true), 280);
  };

  const sceneClass = ["hub-scene", hovered ? "hovered" : "", clicked ? "clicked" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f2ff 0%,#e8f0fe 50%,#f3e8ff 100%)" }}>
      <header className="header">
        <div className="header-left">
          <div className="logo-box">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <circle cx="12" cy="12" r="10" stroke="#6C63FF" strokeWidth="2" />
              <path d="M8 12h8M12 8v8" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="brand-name">AI Analytics Platform</div>
            <div className="brand-sub">Powered by Advanced Intelligence</div>
          </div>
        </div>
        <div className="status-badge">
          <span className="status-dot" />
          System Active
        </div>
      </header>

      <div className="hero">
        <div
          className={sceneClass}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleHubClick}
        >
          <div className="orbit-ring ring-1">
            <div className="ring-dot" />
            <div className="ring-dot-2" />
          </div>
          <div className="orbit-ring ring-2">
            <div className="ring-dot" />
          </div>
          <div className="orbit-ring ring-3">
            <div className="ring-dot" />
          </div>

          {ripples.map((id) => <div key={id} className="ripple" />)}

          <div className="hub-core">
            <OrbitalCore />
            <span className="hub-ai-label">AI</span>
          </div>
        </div>

        <p className="hero-text">
          Your intelligent command center for comprehensive analytics, market insights, and strategic
          <br />
          decision-making across all business dimensions
        </p>
      </div>

      <div className="grid">
        {modules.map((mod) => (
          <div key={mod.title} className="card">
            <div className="card-icon-box" style={{ background:mod.bg, color:mod.color }}>
              {mod.icon}
            </div>
            <div>
              <div className="card-title">{mod.title}</div>
              <div className="card-desc">{mod.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className={`stat-value ${stat.cls}`}>{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {chatOpen && <ChatWorkspace onClose={() => setChatOpen(false)} />}
    </div>
  );
}
