import React from "react";
import HelloUser from "./components/ui/HelloUser"; // Import component vừa tạo

function App() {
  return (
    <div>
      {/* Sử dụng component HelloUser và truyền prop name */}
      <HelloUser name="Minh" />
    </div>
  );
}

export default App;