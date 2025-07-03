import React, { Children } from 'react'
import ProductCard from './ProductCard'
type GridProps = {
    children: React.ReactNode
}
const Grid = ({children}:GridProps) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {children}
    </div>
  )
}

export default Grid