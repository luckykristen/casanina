export async function sendToAI(message) {
  const res = await fetch("http://localhost:3001/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages: [
        { role: "user", content: message }
      ]
    })
  });

  const data = await res.json();
  return data.reply;
}