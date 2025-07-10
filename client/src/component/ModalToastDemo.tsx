import React, { useState } from "react";

export default function ModalToastDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => {
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 2000); // ẩn sau 2s
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-xl font-bold">Modal + Toast Demo</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Chi tiết
        </button>

        <button
          onClick={showToast}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Xoá
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
            <h2 className="text-lg font-semibold mb-4">Thông tin chi tiết</h2>
            <p className="text-gray-700 mb-4">Đây là nội dung modal popup.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {isToastVisible && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50 animate-bounce">
          ✅ Đã xoá!
        </div>
      )}
    </div>
  );
}
