import React from 'react'

// PERHATIKAN: Gunakan '../' (satu langkah mundur), BUKAN '../../'
import '../styles/dashboard.css' 

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card