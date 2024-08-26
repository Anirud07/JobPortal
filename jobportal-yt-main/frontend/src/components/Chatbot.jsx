import React, { useEffect } from 'react';

const MyChatbot = () => {
  useEffect(() => {
    // Function to load the Sendbird chatbot script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://aichatbot.sendbird.com/index.js';
      script.type = 'module';
      script.defer = true;
      script.async = true; 

      // Configuration for the chatbot
      window.chatbotConfig = [
        '0E928D20-E486-48E1-890C-C4578E24A4F8', // Your Sendbird Application ID
        'onboarding_bot', // Your Bot ID
        {
          apiHost: 'https://api-cf-eu-1.sendbird.com',
        },
      ];

      document.body.appendChild(script);
    };

    // Load the script when the component mounts
    loadScript();

    // Clean up: Optionally remove the script when the component unmounts
    return () => {
      // Find the script element and remove it
      const chatbotScript = document.querySelector('script[src="https://aichatbot.sendbird.com/index.js"]');
      if (chatbotScript) {
        document.body.removeChild(chatbotScript);
      }
    };
  }, []);

  return (
    <div id="aichatbot" className="App fixed bottom-8 right-8" style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}></div>
  );
};

export default MyChatbot;