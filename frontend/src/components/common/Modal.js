import React from 'react';

const Modal = (props) => {
  const { isOpen, toggle, header, children } = props;
  return (
    <div className={`${isOpen?'visible opacity-100':'invisible opacity-0'} transform transition-all duration-500 fixed z-10 top-0 left-0 overflow-auto bg-gray-500 bg-opacity-75 pt-32 lg:px-96 w-full h-full px-4 scroll`}>
      <div className="bg-white rounded-lg">
        <div className="flex py-2 px-3 text-2xl font-bold border-b-2 bg-current text-white">
          <div>{header}</div>
          {toggle && <span className="text-white font-bold cursor-pointer hover:text-white ml-auto" onClick={toggle}>&times;</span>}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;