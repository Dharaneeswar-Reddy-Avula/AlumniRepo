import React, { useState } from 'react'
import EventsPage from '../EventsPage'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

// Sample event data
const events = [
  { date: new Date(2025, 3, 23), type: 'past' },
  { date: new Date(2023, 9, 15), type: 'upcoming' },
  // Add more events as needed
]

const EventCalender = () => {
  const [value, setValue] = useState(new Date())

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString())
      if (event) {
        return event.type === 'past' ? 'past-event' : 'upcoming-event'
      }
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div><EventsPage/></div>
      <div className='mt-[150px]'>
        <Calendar
          onChange={setValue}
          value={value}
          tileClassName={tileClassName} 
        />
      </div>
    </div>
  )
}

export default EventCalender