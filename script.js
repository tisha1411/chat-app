// DOM elements
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Send message function
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  // Add user message
  addMessage(text, "sent");

  // Clear input
  input.value = "";

  // Fake bot reply
  setTimeout(() => {
    addMessage("Bot: " + text, "received");
  }, 600);
}

// Add message to chat box
function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});