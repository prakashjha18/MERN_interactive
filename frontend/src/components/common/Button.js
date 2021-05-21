import React from 'react';

const Button = ({ className, children, ...props}) => {
  return (
    <button
      className={` ${className} border-2 border-blue-600 text-white rounded-l-full rounded-r-full bg-current hover:bg-opacity-70 px-10 py-2 focus:outline-none`}
      {...props}
    >{children}</button>
  )
}

export default Button;