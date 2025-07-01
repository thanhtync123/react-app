// 🧪 Bài tập 3: Toggle nội dung
// Mô tả:
//  Tạo component ToggleText có nút "Hiện/Ẩn", 
// bấm nút thì hiện hoặc ẩn đoạn văn bản "Chào mừng bạn đến với React".
// 👉 Gợi ý: sử dụng useState<boolean> để điều khiển trạng thái hiển thị.

import React, { useState } from 'react'

const BT4_ToggleText = () => {
  const [show,setShow] = useState<boolean>(true)

  const handleClick = () => 
  {
    setShow(!show)
    
  };
  return (
   <>

   {show && <div>Chào mừng bạn đến với React</div>} <br />
   <div>
      <button className='bg-blue-500 rounded' onClick={handleClick}>
        {show?'Ẩn':'Hiện'}
        </button>
    </div>
    </>
    
  )
}

export default BT4_ToggleText