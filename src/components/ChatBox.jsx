import { useState, useEffect } from "react";
import "./ChatBox.css"
import { sendToAI } from "../chat";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const WELCOME_MESSAGE = {
    role: "assistant",
    content: "👋 Ahoj! Jsem AI asistent Casa Nina. Rád ti pomohu s cenami, dostupností nebo informacemi o ubytování .🌊🏡"
  };

  async function sendMessage() {
    if (!input) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const reply = await sendToAI(input);

    setMessages([
      ...newMessages,
      { role: "assistant", content: reply },
    ]);

    setLoading(false);

  }

  useEffect(() => {
    const saved = localStorage.getItem("chat-messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("chat-messages", JSON.stringify(messages));
  }, [messages])



return (
  <>
    {!open && (
      <button className="chat-bubble" onClick={() => {
        setOpen(true);

        if (messages.length === 0) {
          setLoading(true);

          setTimeout(() => {
            setMessages([WELCOME_MESSAGE]);
            setLoading(false);
          }, 800);
        }
      }}>
        💬
      </button>
    )}

    {open && (
      <div className="chat-window">
        <div className="chat-header">
          AI Asistent
          <button onClick={() => setOpen(false)}>x</button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
              {m.content}
            </div>
          ))}

          {loading && <div className="msg assistant">AI píše...</div>}
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Napiš dotaz..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Odeslat</button>
        </div>
      </div>
    )}
  </>
);
}

    