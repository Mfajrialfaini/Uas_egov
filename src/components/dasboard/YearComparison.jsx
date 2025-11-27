import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../UI/Card'

// PERBAIKAN: Ubah ../../ menjadi ../
import '../styles/dashboard.css' 

// Pindahkan CustomTooltip ke LUAR komponen YearComparison
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`Tahun ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="tooltip-value" style={{ color: entry.color }}>
            {entry.name}: {entry.value} M
          </p>
        ))}
      </div>
    )
  }
  return null
}

const YearComparison = ({ data }) => {
  return (
    <Card className="comparison-card">
      <h3 className="chart-title">Perbandingan Anggaran 5 Tahun Terakhir</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="year" 
              stroke="#888"
              tick={{ fill: '#fff' }}
            />
            <YAxis 
              stroke="#888"
              tick={{ fill: '#fff' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="pendapatan" 
              fill="#8b5cf6" 
              name="Pendapatan (M)"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="belanja" 
              fill="#c084fc" 
              name="Belanja (M)"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="pembiayaan" 
              fill="#a855f7" 
              name="Pembiayaan (M)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default YearComparison