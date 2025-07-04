import React from 'react'
type StateTagProps =  {
    state:string
}
const StateTag = ({state}:StateTagProps) => {
    const color = state==='pending'? 'text-red-700' 
                : state === 'completed' ? 'text-green-700'
                : 'text-gray-400'
  return (
    <p className={color}>{state}</p>
  )
}

export default StateTag