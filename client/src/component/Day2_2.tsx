import React from 'react'

const Day2_2 = () => {
  return (
    <>
    <header className='rounded bg-blue-800 p-8 flex justify-between text-white'>
        <div className="font-bold text-3xl">
            Logo
        </div>
        <div>
            <nav className='space-x-4'>
                <a href="#" className='hover:underline'>Hà Nội</a>
                <a href="#" className='hover:underline'>Hải Phòng</a>
                <a href="#" className='hover:underline'>Đà Nẵng </a>
                <a href="#" className='hover:underline'>TP.HCM</a>
                <a href="#" className='hover:underline'>Cần Thơ</a>
            </nav>
        </div>
        <div>
               <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-full w-10 h-300" />
        </div>
    </header>
    <div className="flex flex-col gap-4">
    <div className="bg-gray-100 p-3 rounded hover:bg-gray-200">
      <h2 className="font-semibold text-gray-800">Sản phẩm A</h2>
      <p className="text-sm text-gray-600">Giá: 100.000đ</p>
    </div>
        <div className="bg-gray-100 p-3 rounded hover:bg-gray-200">
      <h2 className="font-semibold text-gray-800">Sản phẩm A</h2>
      <p className="text-sm text-gray-600">Giá: 100.000đ</p>
    </div>
        <div className="bg-gray-100 p-3 rounded hover:bg-gray-200">
      <h2 className="font-semibold text-gray-800">Sản phẩm A</h2>
      <p className="text-sm text-gray-600">Giá: 100.000đ</p>
    </div>
        </div>
    
    </>
  )
}

export default Day2_2