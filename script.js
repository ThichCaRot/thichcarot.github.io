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
          botMessage = 'Ngày hôm nay của bạn thế nào? Bạn cần mình giúp gì không?';
        } else {
          botMessage = 'Đây là file ghi âm bạn vừa tìm. Bạn cứ thoải mái hỏi thêm nếu cần gì nhé~';
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
  