// 🧪 Bài tập 5: Nút đổi màu
// Mô tả:
//  Tạo component ColorButton có nút "Đổi màu", mỗi lần bấm 
// thì đổi màu chữ ngẫu nhiên trong danh sách 
// ["red", "green", "blue", "purple"].
// 👉 Gợi ý: dùng Math.random() và useState<string>.
import React, { useState } from 'react'
const colors = ["red", "green", "blue", "purple"]
const BT6_ColorButton = () => {
    const [color,setColor] = useState<string>("black")
    const handleClick = () => {
           const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setColor(randomColor);
        
    }
  return (
    <>
    <div style={{color}}>Chữ này sẽ bị đổi màu</div>
    <button className='bg-blue-500' onClick={handleClick}>Click me</button>
    </>
  )
}

export default BT6_ColorButton