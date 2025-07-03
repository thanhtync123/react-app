import React from 'react'
type InputProps={
    value: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder?: string;
    className?: string;
};
const Input = ({value,onChange,placeholder,className}:InputProps) => {
  return (
    <>
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} className={className} />
    </>
  )
}

export default Input