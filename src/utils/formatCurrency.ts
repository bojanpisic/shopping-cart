const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
  maximumFractionDigits: 2
})

export const  formatCurrency = (price: number) => CURRENCY_FORMATTER.format(price);