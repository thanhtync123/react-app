
import React, { useState } from "react";
import HelloUser from "./components/ui/HelloUser"; // Import component vừa tạo
import HobbyList from "./components/ui/HobbyList"; // Import component danh sách sở thích
import GreetInput from "./components/ui/GreetInput";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const [color, setColor] = useState("blue");
  const handleColorChange = () => {   
    setColor(color === "blue" ? "red" : "blue");
  };


  return (
    <div>
      {/* Sử dụng component HelloUser và truyền prop name */}
      Bài 1:
      <HelloUser name="Thành Tỏi Gaming"
                hometown="Cà Mau"
                age={21} 
      />
      <br />
      Bài 2:
      Số lần bấm nút: {count}
    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClick}>
      Click me
    </button>
    <br />
    Bài 3:
    <button
      className={`px-4 py-2 text-white rounded ${color === "blue" ? "bg-blue-500" : "bg-red-500"}`}
      onClick={handleColorChange}
    >
      Ấn vô đây đổi màu
    </button>
    <br />
     Bài 4:
    <HobbyList hobbies={["Chơi game", "Đọc sách", "Nghe nhạc"]} />
    <br />
    Bài 5:
    <GreetInput />
    </div>
  
    
  );
}

export default App;