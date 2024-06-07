document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userText = userInput.value.trim();
  
    if (userText) {
      // Display user message
      chatBox.innerHTML += `<div class="user-message">User: ${userText}</div>`;
  
      // Simulate typing from the chatbot
      setTimeout(() => {
        let botMessage = '';
        if (userText.toLowerCase() === 'hello') {
          botMessage = 'How are you today? What can I help?';
        } else {
          botMessage = 'Sure, here is what you find:';
          // Call the function to display results
          displayResults();
        }
        chatBox.innerHTML += `<div class="bot-message">Chatbot: ${botMessage}</div>`;
      }, 1000); // Adjust the timeout to simulate slower typing
  
      // Clear input
      userInput.value = '';
    }
  }
  
  function displayResults() {
    const chatBox = document.getElementById('chat-box');
    // Create a result bubble with details
    const resultBubble = `
      <div class="result-bubble">
        <p><strong>Date:</strong> 11/05/2024</p>
        <p><strong>Time:</strong> 3:02 PM</p>
        <p><strong>Event:</strong> Marketing Plan</p>
      </div>
    `;
    chatBox.innerHTML += resultBubble;
  }
  