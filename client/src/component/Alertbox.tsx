import React from 'react'
type AlertboxProps = {
    type: 'success' | 'warning' | 'error'
    children : React.ReactNode
}
const Alertbox = ({type,children}:AlertboxProps) => {
    const borderColor = 
    {
        success: 'border-green-500',
        warning: 'border-yellow-500',
        error: 'border-red-500'
    } 
    return (
    <div className={`border-l-4 p-4 ${borderColor[type]} bg-white`}>
        {children}
    </div>
  )
}

export default Alertbox