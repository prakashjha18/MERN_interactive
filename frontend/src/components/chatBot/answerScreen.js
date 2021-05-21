import React from 'react';
import BotCard from './botCard';

const AnswerScreen = ({ item }) => {
  return (
    <div className="h-5/6">
      <BotCard header={item.question}>
        <div className="p-2">
          {item.answer}
        </div>
      </BotCard>
    </div>
  )
}

export default AnswerScreen;