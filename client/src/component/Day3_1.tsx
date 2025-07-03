import React from 'react'

type ButtonProps = {
  text: string;
  onClick?: () => void
}
const Day3_1 = ({ text, onClick }:ButtonProps) => {
  return (
    <>
    <button className="bg-blue-500 px-4 py-2 rounded text-white" onClick={onClick}>
      {text}
    </button>
    </>
  )
}

export default Day3_1