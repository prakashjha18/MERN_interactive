import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import icons from '../../constants/icons';

const IconSelector = ({ className, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  const { touched, error } = meta;
  const { setValue } = helpers;
  const { value } = meta;
  const [searchValue,setSearchValue] = useState('');
  return (
    <div>
      <input
        className={`${className} bg-white focus:outline-none border border-gray-300 focus:shadow-outline border rounded-lg py-2 px-4 block w-full appearance-none leading-normal`}
        onChange={(e)=>setSearchValue(e.target.value)}
        placeholder="Search Icon"
      />
      {touched && error && <div className="text-red-600 ff-inter-14 text-xs">{meta.error}</div>}
      <div className="grid grid-cols-2 gap-4 p-2">
        {icons.filter(i=>i.includes(searchValue)).map(i => (
          <div className={`rounded-lg hover:bg-current hover:text-white text-center cursor-pointer ${value===i?'bg-current text-white':'bg-gray-100'}`} onClick={()=>setValue(i)}>
            <i className={`fas fa-${i}`}/>
            <div>{i}</div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default IconSelector;