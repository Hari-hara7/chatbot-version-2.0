const chatbotResponses = [
    "Ask about  notes provide subject name i will generate a link to access",
 
  ];
  
  const subjectLinks = {
    'physics': 'https://drive.google.com/drive/folders/17Z3rMEoui31MHtjl95mmP6oXMVrAW2tz',
    'maths': 'https://drive.google.com/drive/folders/1DL06euTxLjK1GWH2AFPaB1Yfd5mxf_8j',
    'maths1': 'https://drive.google.com/drive/folders/1sYdBua6wr7uhMYw4uIKw5hrPtYd10c_B',
    'cpp': 'https://drive.google.com/drive/folders/134H9d31TReG8O_qgglnE9qqgctLtEv-z',
    'adld': 'https://drive.google.com/drive/folders/16T2_I_JIEisswgPj4Xk6S_OY_DTtCklG',
    'be': 'https://drive.google.com/drive/folders/17iJtHYPWgAjSgAG1-SPQKYIBfQsDTcYK',
    'english': 'https://drive.google.com/drive/folders/17lhdfYPpJruKzbPyIbqv2wL9TBdvwgDq',
    'chemistry': 'https://drive.google.com/drive/folders/11s9sgR-Hpb40p2tVlsetlBWcE6UPIubO',
    'bee': 'https://drive.google.com/drive/folders/19sv3ZFsqBuNxB3Ltuyu6YwYJLh_86q__',
    'it skill': 'https://drive.google.com/drive/folders/11qYDOnYNVIRyVNSYOFan64n-RHn8ozIa',
    'ev': 'https://drive.google.com/drive/folders/1EBRbMBS6r42GQ60k8O4AdkiC_0muZ1TF',
    'bioevs': 'https://drive.google.com/drive/folders/13K6Hwh_bkWi1hBb9iYAJf6nQcS6In0AQ',
    'civil': 'https://drive.google.com/drive/folders/1bfCQooRwbnmkJC_W18mTRYzTgfWHJhEb',
    'python': 'https://drive.google.com/drive/folders/17c7FKu4TstfV-6Bfhc5uCij1rTK6TdIG',
    'question papers': 'https://drive.google.com/drive/folders/1NT6kGiZI2-ycqLPZL-ELFsPKdyLakxie',
    'new physics': 'https://drive.google.com/drive/folders/1e-LQMg0B7XF9wJDfWg4vWwc8SZg16LXt'
  };
  
  function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const chat = document.getElementById("chat");
  
    const message = messageInput.value.trim();
    if (message === "") {
      return;
    }
  
    const newMessage = document.createElement("div");
    newMessage.textContent = `You: ${message}`;
    chat.appendChild(newMessage);
  
    // Check if the user's message matches any subject
    processUserMessage(message);
  
    // Clear the input field after sending the message
    messageInput.value = "";
  
    // Scroll to the bottom of the chat after adding a new message
    chat.scrollTop = chat.scrollHeight;
  }
  
  function processUserMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
  
    // Check if the user's message matches any subject
    for (const subject in subjectLinks) {
      if (lowerCaseMessage.includes(subject)) {
        displayLink(subject, subjectLinks[subject]);
        return; // Stop after finding the first match
      }
    }
  
    simulateReply(); // Default response if no specific subject is matched
  }
  
  function simulateReply() {
    const chat = document.getElementById("chat");
  
    const replyDelay = Math.random() * 2000 + 1000; // Between 1 and 3 seconds
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * chatbotResponses.length);
      const replyMessage = document.createElement("div");
      replyMessage.textContent = `Chatbot: ${chatbotResponses[randomIndex]}`;
      chat.appendChild(replyMessage);
  
      // Scroll to the bottom after adding a new message
      chat.scrollTop = chat.scrollHeight;
    }, replyDelay);
  }
  
  function displayLink(title, link) {
    const chat = document.getElementById("chat");
  
    const linkMessage = document.createElement("div");
    linkMessage.innerHTML = `Chatbot: Sure, <a href="${link}" target="_blank">click here</a> for ${title}`;
    chat.appendChild(linkMessage);
  
    // Scroll to the bottom after adding a new message
    chat.scrollTop = chat.scrollHeight;
  }
  