import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Tháng 1', doanhthu: 4000 },
  { name: 'Tháng 2', doanhthu: 3000 },
  { name: 'Tháng 3', doanhthu: 5000 },
  { name: 'Tháng 4', doanhthu: 2000 },
]

const cards = [
  { title: 'Doanh thu', value: '120 triệu' },
  { title: 'Đơn hàng', value: '350' },
  { title: 'Khách hàng', value: '210' },
  { title: 'Sản phẩm', value: '58' }
]

const Day9 = () => {
  return (
    <div className="min-h-screen grid grid-cols-[200px_1fr]">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li>🏠 Dashboard</li>
          <li>📦 Sản phẩm</li>
          <li>📈 Báo cáo</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-6 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="text-sm">Xin chào, Admin 👋</div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-4 rounded shadow text-center">
              <p className="text-gray-500">{card.title}</p>
              <p className="text-xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Biểu đồ */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Doanh thu theo tháng</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="doanhthu" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Day9
