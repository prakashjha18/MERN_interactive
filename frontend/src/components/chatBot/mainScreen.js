import React from 'react';
import BotCard from './botCard';

const MainScreen = ({ data, faqData, updateScreen }) => {
  return (
    <div>
      <BotCard header="Support">
        <div className="p-2">
          {data.map(item => (
            <div className="grid grid-cols-6 p-2 hover:bg-current cursor-pointer hover:text-white rounded-lg" onClick={()=>updateScreen(item.id)}>
              <div>
                <i className={`fas fa-${item.icon} text-3xl`}/>
              </div>
              <div className="col-start-2 col-end-7">
                <div className="font-bold">{item.header}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </BotCard>
      <BotCard header="FAQ">
        <div className="p-2">
          {faqData.slice(0,2).map(item => (
            <div className="grid grid-cols-6 p-2 hover:bg-current cursor-pointer hover:text-white rounded-lg" onClick={()=>updateScreen(`FAQ_${item._id}`)}>
              <div>
                <i className={`fas fa-${item.icon} text-3xl`}/>
              </div>
              <div className="col-start-2 col-end-7">
                <div className="font-bold">{item.header}</div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-6 p-2 hover:bg-current cursor-pointer hover:text-white rounded-lg" onClick={()=>updateScreen('CATEGORIES_SCREEN')}>
            <div>
              <i className={`fas fa-ellipsis-h text-3xl`}/>
            </div>
            <div className="col-start-2 col-end-7">
              <div className="font-bold">See More Options</div>
            </div>
          </div>
        </div>
      </BotCard>
    </div>
  )
}

export default MainScreen;