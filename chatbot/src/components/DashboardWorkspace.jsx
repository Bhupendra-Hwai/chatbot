import { useEffect, useRef, useState } from "react";

export default function DashboardWorkspace({
  dashboardName,
  dashboardUrl,
  onClose,
  aiReplies,
  initialChatMessage,
}) {
  const seededMessage = {
    role: "ai",
    text: `You're viewing ${dashboardName}. Ask me to summarize the dashboard, compare trends, or explain what to focus on.`,
  };

  const [messages, setMessages] = useState([initialChatMessage, seededMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(true);
  const [copilotExpanded, setCopilotExpanded] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (presetText) => {
    const text = (presetText ?? input).trim();
    if (!text) return;

    setInput("");
    setMessages((current) => [...current, { role: "user", text }]);
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

  const copilotClassName = [
    "copilot-overlay",
    copilotOpen ? "is-open" : "is-closed",
    copilotExpanded ? "is-expanded" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className="chat-overlay">
      <div className="dashboard-workspace">
        <section className="dashboard-viewer">
          <div className="dashboard-stage">
            <div className="dashboard-iframe-shell">
              <iframe
                className="dashboard-iframe"
                src={dashboardUrl}
                title={`${dashboardName} dashboard`}
              />
            </div>

            <button className="dashboard-back-btn" onClick={onClose} aria-label="Go back to home">
              ← Home
            </button>

            <button className="chat-close dashboard-close" onClick={onClose} aria-label="Close dashboard workspace">
              x
            </button>

            <aside className={copilotClassName}>
              <div className="copilot-overlay-header">
                <div className="chat-header-left">
                  <div className="chat-avatar">AI</div>
                  <div>
                    <div className="chat-title">Dashboard Copilot</div>
                    <div className="chat-subtitle">Ask questions on top of the dashboard</div>
                  </div>
                </div>

                <div className="copilot-overlay-actions">
                  <button
                    type="button"
                    className="copilot-icon-btn"
                    onClick={() => setCopilotExpanded((current) => !current)}
                    aria-label={copilotExpanded ? "Shrink copilot" : "Expand copilot"}
                  >
                    {copilotExpanded ? "-" : "+"}
                  </button>
                  <button
                    type="button"
                    className="copilot-icon-btn"
                    onClick={() => setCopilotOpen(false)}
                    aria-label="Hide copilot"
                  >
                    x
                  </button>
                </div>
              </div>

              <div className="copilot-prompts">
                <button className="copilot-prompt-btn" onClick={() => sendMessage(`Summarize the key insights from ${dashboardName}.`)}>
                  Summarize
                </button>
                <button className="copilot-prompt-btn" onClick={() => sendMessage(`What trends should I focus on in ${dashboardName}?`)}>
                  Trends
                </button>
                <button className="copilot-prompt-btn" onClick={() => sendMessage(`Give me recommended actions based on ${dashboardName}.`)}>
                  Actions
                </button>
              </div>

              <div className="chat-messages copilot-messages">
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

              <div className="chat-input-shell copilot-input-shell">
                <div className="chat-input-row">
                  <textarea
                    className="chat-input"
                    placeholder={`Ask about ${dashboardName}...`}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={onKeyDown}
                    rows={1}
                  />
                  <button className="chat-send" onClick={() => sendMessage()} aria-label="Send dashboard message">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </aside>

            {!copilotOpen && (
              <button
                type="button"
                className="copilot-fab"
                onClick={() => setCopilotOpen(true)}
              >
                Open Copilot
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
