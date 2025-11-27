import React from 'react'
import Card from '../UI/Card'
// PERBAIKAN: Ubah ../../ menjadi ../
import { formatCurrency } from '../data/budgetData' 
// PERBAIKAN: Ubah ../../ menjadi ../
import '../styles/dashboard.css' 

const BudgetSummary = ({ data }) => {
  const cards = [
    {
      title: 'Pendapatan',
      planned: data.pendapatan.planned,
      realized: data.pendapatan.realized,
      percentage: data.pendapatan.percentage,
      color: 'var(--color-success)'
    },
    {
      title: 'Belanja',
      planned: data.belanja.planned,
      realized: data.belanja.realized,
      percentage: data.belanja.percentage,
      color: 'var(--color-warning)'
    },
    {
      title: 'Pembiayaan',
      planned: data.pembiayaan.planned,
      realized: data.pembiayaan.realized,
      percentage: data.pembiayaan.percentage,
      color: 'var(--color-info)'
    }
  ]

  return (
    <div className="budget-summary">
      {cards.map((card, index) => (
        <Card key={index} className="summary-card">
          <div className="card-header">
            <h3 className="card-title">{card.title}</h3>
            <div className="percentage-badge" style={{ color: card.color }}>
              {card.percentage}%
            </div>
          </div>
          <div className="card-content">
            <div className="amount-section">
              <div className="amount-item">
                <span className="amount-label">Anggaran</span>
                <span className="amount-value planned">
                  {formatCurrency(card.planned)}
                </span>
              </div>
              <div className="amount-item">
                <span className="amount-label">Realisasi</span>
                <span className="amount-value realized">
                  {formatCurrency(card.realized)}
                </span>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${card.percentage}%`,
                  background: card.color
                }}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default BudgetSummary