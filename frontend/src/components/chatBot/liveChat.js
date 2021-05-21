import React from 'react';

const LiveChat = ({ isOpen }) => {
  return (
    <div className={`${isOpen?'visible opacity-100':'invisible opacity-0'} absolute w-full transform transition-all duration-500 h-full`}>
      <iframe
        allow="microphone;"
        height="92%"
        width="100%"
        src="https://tawk.to/chat/60a4f2f6b1d5182476ba5c24/1f625a5in">
      </iframe>
    </div>
  )
}

export default LiveChat;