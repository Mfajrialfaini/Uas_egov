import React from 'react'
// PERBAIKAN: Ubah ../../ menjadi ../
import '../styles/dashboard.css' 

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card