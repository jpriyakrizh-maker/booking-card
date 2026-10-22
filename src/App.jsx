import { useState } from 'react'
import './App.css'
import TabSwitch from './components/TabSwitch'
import BookingCard from './components/BookingCard'
import BookingPanel from './components/BookingPanel'
import DateModal from './components/DateModal'

export default function App() {
  const [active, setActive] = useState('kayaking') // tab highlight
  const [shown, setShown] = useState('kayaking')   // card content
  const [flipping, setFlipping] = useState(false)
  const [booked, setBooked] = useState({})
  const [modalFor, setModalFor] = useState(null)

  const changeTab = (key) => {
    if (key === active) return
    setActive(key)
    setFlipping(true)
    setTimeout(() => {
      setShown(key)
      setFlipping(false)
    }, 300)
  }

  const openModal = (key) => {
    setActive(key)
    setShown(key)
    setModalFor(key)
  }

  const confirm = (date) => {
    setBooked((b) => ({ ...b, [modalFor]: date }))
    setModalFor(null)
  }

  return (
    <>
      <TabSwitch active={active} onChange={changeTab} />

      <div className="stage">
        <BookingCard
          type={shown}
          bookedDate={booked[shown]}
          flipping={flipping}
          onOpen={() => openModal(shown)}
        />
        <BookingPanel active={shown} booked={booked} onPick={openModal} />
      </div>

      <DateModal
        type={modalFor}
        initialDate={modalFor ? booked[modalFor] : ''}
        onClose={() => setModalFor(null)}
        onConfirm={confirm}
      />
    </>
  )
}