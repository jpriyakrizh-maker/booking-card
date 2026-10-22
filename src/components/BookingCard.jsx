import { DECOR } from './Decor'
import { DESTINATIONS, formatPrice, formatDate } from '../data/destinations'

export default function BookingCard({ type, bookedDate, flipping, onOpen }) {
  const item = DESTINATIONS[type]
  const [P1, P2, P3] = DECOR[type]

  return (
    <div className="scene">
      <div className={'card' + (flipping ? ' flipout' : '')} data-t={type}>
        <div className={'bg ' + type} />

        <div className="pop p1 anim"><P1 /></div>
        <div className="pop p2 anim"><P2 /></div>
        <div className="pop p3 anim"><P3 /></div>

        <div className="info">
          <h2>{item.name}</h2>
          <div className="price">
            <span>{formatPrice(item.price)}</span> <small>{item.duration}</small>
          </div>
          <div className="per">per person</div>
          <div className="loc">📍 {item.location}</div>

          {bookedDate ? (
            <>
              <div className="badge">✓ Booked: {formatDate(bookedDate)}</div>
              <br />
              <button className="cta ok" onClick={onOpen}>Manage Booking</button>
            </>
          ) : (
            <button className="cta" onClick={onOpen}>Choose Date</button>
          )}
        </div>
      </div>
    </div>
  )
}