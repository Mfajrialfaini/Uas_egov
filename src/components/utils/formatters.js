export const formatNumber = (num) => {
  return new Intl.NumberFormat('id-ID').format(num)
}

export const formatCurrency = (amount) => {
  if (amount >= 1000000000000) {
    return `Rp ${(amount / 1000000000000).toFixed(2)} T`
  } else if (amount >= 1000000000) {
    return `Rp ${(amount / 1000000000).toFixed(2)} M`
  } else if (amount >= 1000000) {
    return `Rp ${(amount / 1000000).toFixed(2)} Jt`
  }
  return `Rp ${formatNumber(amount)}`
}