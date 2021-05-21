import React from 'react';

const BotCard = (props) => {
  const { header, children } = props;
  return (
    <div className="bg-white m-2 rounded-md">
      <div className="p-2 font-bold border-b-2 text-lg">
        {header}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default BotCard;