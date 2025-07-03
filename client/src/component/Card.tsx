import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex gap-4'>
    <div className='bg-blue-100 shadow-md p-4 w-64 shadow-xl'>
        <h2 className='text-xl font-bold text-gray-800'>Sản phẩm A</h2>
        <p className='text-gray-600'>Giá 100.000đ</p>
    </div>
    <div className='bg-blue-100 shadow-md p-4 w-64'>
        <h2 className='text-xl font-bold text-gray-800'>Sản phẩm B</h2>
        <p className='text-gray-600'>Giá 200.000đ</p>
    </div>
        <div className='bg-blue-100 shadow-md p-4 w-64'>
        <h2 className='text-xl font-bold text-gray-800'>Sản phẩm C</h2>
        <p className='text-gray-600'>Giá 300.000đ</p>
    </div>

    
        </div>
        </>
  )
}

export default Card