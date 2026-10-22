import { DESTINATIONS } from '../data/destinations'

export default function TabSwitch({ active, onChange }) {
  return (
    <div className="tabs">
      {Object.keys(DESTINATIONS).map((key) => (
        <button key={key} className={active === key ? 'on' : ''} onClick={() => onChange(key)}>
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  )
}