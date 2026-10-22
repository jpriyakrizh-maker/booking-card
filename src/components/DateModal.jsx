import { useEffect, useState } from 'react'
import { DESTINATIONS, formatPrice } from '../data/destinations'

const iso = (d) => d.toISOString().slice(0, 10)
const addDays = (n) => {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d
}
const nextSaturday = () => addDays((6 - new Date().getDay() + 7) % 7 || 7)

export default function DateModal({ type, initialDate, onClose, onConfirm }) {
  const [date, setDate] = useState('')

  useEffect(() => {
    setDate(initialDate || '')
  }, [type, initialDate])

  if (!type) return null
  const item = DESTINATIONS[type]

  return (
    <div className="ov show" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="x" onClick={onClose}>✕</button>
        <div style={{ clear: 'both' }} />
        <h4>Select Booking Date</h4>
        <p>{item.location} • {formatPrice(item.price)} per person</p>

        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <div className="chips">
          <button onClick={() => setDate(iso(addDays(1)))}>Tomorrow</button>
          <button onClick={() => setDate(iso(nextSaturday()))}>This Saturday</button>
          <button onClick={() => setDate(iso(addDays(7)))}>In 1 Week</button>
        </div>

        <button className="go" disabled={!date} onClick={() => onConfirm(date)}>
          Confirm Booking
        </button>
      </div>
    </div>
  )
}