// 🧪 Bài tập 4: Danh sách người dùng
// Mô tả:
//  Tạo component UserList nhận props là mảng người dùng 
// { name: string }[] và hiển thị danh sách tên.
// 👉 Gợi ý: dùng .map() để render list.
import React from 'react'
type UserListProp = {name:string[]}
const BT5_MapTen = (props:UserListProp) => {
  return (
    <div>List tên nè: {props.name } </div>
  )
}

export default BT5_MapTen