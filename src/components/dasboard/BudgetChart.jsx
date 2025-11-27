import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../UI/Card'

// PERBAIKAN: Ubah ../../ menjadi ../ (karena folder styles tetanggaan dengan folder dasboard)
import '../styles/dashboard.css' 

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`Bulan ${label}`}</p>
        <p className="tooltip-value" style={{ color: '#8b5cf6' }}>
          Anggaran: {payload[0].value} M
        </p>
        <p className="tooltip-value" style={{ color: '#c084fc' }}>
          Realisasi: {payload[1].value} M
        </p>
      </div>
    )
  }
  return null
}

const BudgetChart = ({ data }) => {
  return (
    <Card className="chart-card">
      <h3 className="chart-title">Realisasi Anggaran Bulanan 2024</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="month" 
              stroke="#888"
              tick={{ fill: '#fff' }}
            />
            <YAxis 
              stroke="#888"
              tick={{ fill: '#fff' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="planned" 
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#c084fc' }}
              name="Anggaran (M)"
            />
            <Line 
              type="monotone" 
              dataKey="realized" 
              stroke="#c084fc"
              strokeWidth={3}
              dot={{ fill: '#c084fc', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#8b5cf6' }}
              name="Realisasi (M)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default BudgetChart