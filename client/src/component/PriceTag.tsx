import React from 'react'

type PriceTagProps = 
{
    price:number
}
const PriceTag = ({price}:PriceTagProps) => {
  const color = price>1000 ? 'text-red-600' : 'text-green-600'
    return (
    <span className={`${color}`}>
        {price.toLocaleString()}đ
    </span>
  )
}

export default PriceTag