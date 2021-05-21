import React from 'react';

const ChatBot = () => {
  return (
    <div className="h-full">
      <iframe
        allow="microphone;"
        height="92%"
        width="100%"
        src="https://console.dialogflow.com/api-client/demo/embedded/4ce60952-89ed-48fc-9d21-2631f56996f5">
      </iframe>
    </div>
  )
}

export default ChatBot;