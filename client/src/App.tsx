
import { Hand } from "lucide-react";
import React, { useState } from "react";
import Hello from "./component/Hello";
import BT4_ToggleText from "./component/BT4_ToggleText";
import BT5_MapTen from "./component/BT5_MapTen";
import BT6_ColorButton from "./component/BT6_ColorButton";
import Card from "./component/Card";
import Day2Layout from "./component/Day2Layout";
import Day2_2 from "./component/Day2_2";
import Day3_1 from "./component/Day3_1";
import Input from "./component/Input";
import { text } from "stream/consumers";
import ProductCard from "./component/ProductCard";
import UserCard from "./component/UserCard";
import Alertbox from "./component/Alertbox";
import PriceTag from "./component/PriceTag";
import Grid from "./component/Grid";
import TodoCard from "./component/TodoCard";



function App() {
  type Todo = {
  id: number;
  name: string;
  state: string;
  description: string;
};
const [newName, setNewName] = useState('');
const [newDesc, setNewDesc] = useState('');
 const products = [
   { id: 1, name: 'iPhone 15', price: 999, description: 'Nội địa' },
  { id: 2, name: 'MacBook Air', price: 1299, description: 'Chánh hãng' },
  { id: 3, name: 'AirPods Pro', price: 249, description: 'Bản quốc tế' },
  { id: 4, name: 'Apple Watch SE', price: 329, description: 'Hàng mới' },
  { id: 5, name: 'iPad Mini', price: 599, description: 'Dùng cho học sinh' },
  { id: 6, name: 'iMac 24"', price: 1799, description: 'Màn hình 4.5K Retina' },
  { id: 7, name: 'Magic Mouse', price: 79, description: 'Chuột cảm ứng Apple' },
  { id: 8, name: 'Mac Studio', price: 1999, description: 'Dành cho dân chuyên nghiệp' },
  { id: 9, name: 'Apple TV 4K', price: 129, description: 'Giải trí tại gia' },
  { id: 10, name: 'HomePod Mini', price: 99, description: 'Loa thông minh nhỏ gọn' },
];
const sampleTodos = [
  { id: 1, name: 'Mở mắt', state: 'pending', description: 'Dậy đúng giờ' },
  { id: 2, name: 'Đánh răng', state: 'completed', description: 'Giữ răng sạch' },
  { id: 3, name: 'Tập thể dục', state: 'pending', description: '30 phút buổi sáng' },
  { id: 4, name: 'Ăn sáng', state: 'completed', description: 'Trứng + sữa' },
  { id: 5, name: 'Làm bài tập', state: 'pending', description: 'React Todo App' },
  { id: 6, name: 'Học tiếng Anh', state: 'completed', description: 'Từ vựng mới' },
  { id: 7, name: 'Code dự án', state: 'pending', description: 'Todo + StateTag' },
  { id: 8, name: 'Đọc sách', state: 'completed', description: '20 trang sách lập trình' },
  { id: 9, name: 'Đi chợ', state: 'pending', description: 'Mua rau, cá, thịt' },
  { id: 10, name: 'Ngủ sớm', state: 'pending', description: 'Trước 11 giờ đêm' },
];



const users = 
  [
  { id: 'NV01', name: 'Dương Ngọc Nhân', email: 'nhandn@gmail.com' },
  { id: 'NV02', name: 'Dương Quá', email: 'quad@gmail.com' },
  { id: 'NV03', name: 'Trương Vô Kỵ', email: 'voky@gmail.com' },
  { id: 'NV04', name: 'Tiểu Long Nữ', email: 'longnu@gmail.com' },
  ]
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [text,setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(sampleTodos);
  const HandleClickB1 = () => {
    setCount
  };
  const HandleClick3Giam = () => {
    if (count2 <= 0) return; // Prevent negative count
    setCount2(count2 - 1);
  };
    const HandleClick3Tang = () => {
    setCount2(count2 + 1);
  };
  const HandleClick3 = () =>
  {
    alert("chao")
  };
  const HandleAddToDo = () => 
  {
    if(newName.trim()==='') return;
    const newTodo = {
      id:todos.length+1,
      name: newName,
      state: 'pending',
      description: newDesc
    };
    setTodos([...todos,newTodo])
      setNewName('');
  setNewDesc('');
  }
  return (
  <> 
    <p>Bài 1 </p> 
    <h1>Số nè {count}</h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    onClick={HandleClickB1}>
      Nút nhấn
    </button>
    <br></br>
    Bài 2:
    <Hello name="Nhân" />
    <br />
    Bài 3
    <h1>Số nè {count2}</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={HandleClick3Tang}>
      Tăng 
    </button>
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={HandleClick3Giam}>
      Giảm
    </button>
    <br />
    Bài 4
    <BT4_ToggleText/>
    Bài 5
    <BT5_MapTen name={['Trúc','My']}/>
    <br />
    Bài 6
    <BT6_ColorButton/>
    <br />
    Ngày 2
    Bài 1
    <div>
    <h1 className="text-3xl text-blue-700 font-bold">
      Demo Tailwind cơ bản
    </h1>
    <Card/>
    </div>
    Layout basic
    <Day2Layout/>
    <Day2_2/>
    Day3 <br />
    <Day3_1 text="Nút nè" onClick={HandleClick3}/>
    Phần 2 
    Input nè <br />
    <Input 
    value={text} 
    onChange={e=>setText(e.target.value)}
    placeholder="Nhập gì đó"
    className="border border-gray-400 p-1"
    />
    <div className="grid grid-cols-2 gap-4">
      {
        products.map(prod => (
          <ProductCard key={prod.id} product={prod}/>
        ))
      }
    </div>
    <div className="grid grid-cols-2 gap-4">
        {
          users.map(item =>(
            <UserCard key={item.id} user={item}/>
          ))
        }
    </div>
      
      <div className="space-y-4 p-8">
        <Alertbox type="success">Thành công</Alertbox>
        <Alertbox type="warning">Cảnh báo</Alertbox>
        <Alertbox type="error">Lỗi</Alertbox>
      </div>
      <br />
      <div className="grid grid-cols-2 gap-4">
          {
            products.map(item=>(
              <ProductCard key={item.id} product={item}/>
            ))
          }
      </div>
      <Grid>  {products.map(prod => (
    <ProductCard key={prod.id} product={prod} />
  ))}</Grid>
  
  <span>Tên công việc:   </span>
  <input type="text" className="border border-gray-800 p-2" value={newName} 
  onChange={e => setNewName (e.target.value)}
  />  
  <span>                   </span>
  <span>Mô tả:   </span>
<textarea
  className="border border-gray-800 p-2"
  rows={3}
  placeholder="Nhập mô tả..."
  value={newDesc}
  onChange={e => setNewDesc(e.target.value)}
/>
    <span>                   </span>
  <button className="border border-gray-800 p-2" onClick={HandleAddToDo}>Thêm</button>
  <div className='grid grid-cols-5'>
      {todos.map(item => (
        <TodoCard key={item.id} todo={item}/>
      ))}
  </div>


  </>
  );
}

export default App;
