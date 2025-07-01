
import { Hand } from "lucide-react";
import React, { useState } from "react";
import Hello from "./component/Hello";
import BT4_ToggleText from "./component/BT4_ToggleText";
import BT5_MapTen from "./component/BT5_MapTen";
import BT6_ColorButton from "./component/BT6_ColorButton";

function App() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
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
  </>
  );
}

export default App;
