import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import todoicon from "./assets/todoicon.png";
import React, { useState } from "react";

type TodoItem = {
  id: number;
  content: string;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<TodoItem[]>([]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newItem: TodoItem = {
        id: Date.now(), // hoặc dùng uuid
        content: inputValue.trim(),
      };
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Chào mừng đến với ToDoList</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 w-full max-w-md"
            placeholder="Nhập nội dung"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAdd}
          >
            Thêm
          </button>
        </div>
        <table className="table-auto border w-full max-w-md">
          <thead>
            <tr>
              <th className="border px-2">ID</th>
              <th className="border px-2">Nội dung</th>
              <th className="border px-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border px-2">{item.id}</td>
                <td className="border px-2">{item.content}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default App;
