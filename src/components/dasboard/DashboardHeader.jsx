import React from 'react'
import Card from '../UI/Card'
import '../styles/dashboard.css' 

const DashboardHeader = () => {
  return (
    <Card className="dashboard-header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">
            Dashboard Anggaran Daerah
          </h1>
          <p className="header-subtitle">
            Kabupaten Jombang - Transparansi Pengelolaan APBD
          </p>
        </div>
        <div className="header-badge">
          <span className="badge-year">2024</span>
          <span className="badge-text">Tahun Anggaran</span>
        </div>
      </div>
    </Card>
  )
}

export default DashboardHeader