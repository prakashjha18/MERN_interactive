import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

const InputField = ({ className, inputType, ...props }) => {
  const [{ value: newValue, onChange, onBlur, ...field }, meta] = useField(props);
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(newValue);
  }, [newValue]);
  const { touched, error } = meta;

  return (
    <div>
      <input
        type={inputType}
        className={`${className} bg-white focus:outline-none border ${(touched && error) ? 'border-red-500 shadow-lg': 'border-gray-300 focus:shadow-outline border'} rounded-lg py-2 px-4 block w-full appearance-none leading-normal`}
        {...field} {...props}
        onChange={(e)=>setValue(e.target.value)}
        onBlur={(e)=>{ onBlur(e); onChange(e);}}
        onKeyPress={(e)=>e.key==='Enter'?onChange(e):null}
        value={value}
      />
      {touched && error && <div className="text-red-600 ff-inter-14 text-xs">{meta.error}</div>}
    </div>

  );
}

export default InputField;