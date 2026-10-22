import { DESTINATIONS, formatPrice, formatDate } from '../data/destinations'

export default function BookingPanel({ active, booked, onPick }) {
  const total = Object.keys(booked).reduce((sum, k) => sum + DESTINATIONS[k].price, 0)

  return (
    <div className="panel">
      <h3>🗓 Booking Details</h3>

      {Object.entries(DESTINATIONS).map(([key, item]) => (
        <div key={key} className={'row' + (key === active ? ' act' : '')}>
          <div className="t">
            <b>{item.name}</b>
            <b>{formatPrice(item.price)}</b>
          </div>
          <div className="b">
            {booked[key] ? (
              <>
                <span className="done">✓ {formatDate(booked[key])}</span>
                <button onClick={() => onPick(key)}>Edit</button>
              </>
            ) : (
              <>
                <span>Not Booked</span>
                <button onClick={() => onPick(key)}>Choose Date</button>
              </>
            )}
          </div>
        </div>
      ))}

      <div className="tot">
        <span>Total Payable</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  )
}