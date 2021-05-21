import React from 'react';
import BotCard from './botCard';

const QuestionScreen = (props) => {
  const { questions, header, updateScreen } = props;
  return (
    <div className="h-5/6">
      <BotCard header={header}>
        <div style={{ height: '22rem'}} className="h-96 overflow-y-auto scroll">
          {questions.map((item) => (
            <div className="grid grid-cols-6 p-2 hover:bg-current cursor-pointer hover:text-white rounded-lg p-2" onClick={()=>updateScreen(item)}>
              <div>
                <i className={`fas fa-clipboard text-sm ml-2`}/>
              </div>
              <div className="col-start-2 col-end-7">
                <div>{item.question}</div>
              </div>
            </div>
          ))}
        </div>
      </BotCard>
    </div>
  )
}

export default QuestionScreen;