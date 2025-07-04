import React, { useState } from 'react'
import Input from './Input'

const todoapp = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState('');
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const handdleSelect = (value:string,index: number) =>
    {
       setText(value)
       setEditIndex(index);
    }
    const handleDelete = (index: number) => 
    {
      setTodos(todos.filter((_, i) => i !== index));
    }
    const handleAddorEdit = () => 
    {
       if(text.trim()==='') return;
       if(editIndex===null)
        setTodos([...todos,text])
       else 
        
       {
 const newTodos = [...todos];
      newTodos[editIndex] = text;
      setTodos(newTodos);
      setEditIndex(null);
        }
        setText('')
    }

    return (
    <>
    Đây là todo app
   <input type="text" 
    value = {text}
    onChange={(e)=>setText(e.target.value)}
   className='border border-gray-500 px-3 py-2' />
     <button
          onClick={handleAddorEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editIndex === null ? 'Thêm' : 'Cập nhật'}
        </button><br />
        <p>Các công việc của bạn:</p>
        <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="mb-1"  >
            {todo} 
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                onClick={()=>handleDelete(index)}>
                Xóa
            </button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            onClick={() => handdleSelect(todo,index)}>
                Sửa
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default todoapp
