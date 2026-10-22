export const DESTINATIONS = {
  kayaking: { name: 'Kayaking', price: 3299, duration: '/ 4hrs', location: 'Drina, Serbia' },
  camping: { name: 'Camping', price: 2499, duration: '/ 8hrs', location: 'Tara, Serbia' },
}

export const formatPrice = (n) => '₹' + n.toLocaleString('en-IN')

export const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })