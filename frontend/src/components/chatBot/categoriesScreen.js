import React from 'react';
import BotCard from './botCard';

const CategoriesScreen = ({ header, data, updateScreen }) => {
  return (
    <div>
      <BotCard header={header}>
        <div style={{ height: '23rem'}} className="grid grid-cols-2 bg-gray-100 gap-4 p-4 overflow-y-auto scroll">
          {data.map((item,index) => (
            <div className="rounded-lg p-6 mt-4 bg-white cursor-pointer hover:bg-current hover:text-white h-24" onClick={()=>updateScreen(item)}>
              <div className="text-lg"><i className={`fas fa-${item.icon}`}/></div>
              <div>{item.header}</div>
            </div>
          ))}
        </div>
      </BotCard>
    </div>
  )
}

export default CategoriesScreen;