import Header from '../../components/Header'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'

const Calendar = () => {
  const [events, setEvents] = useState<{ title: string, date: string }[]>([])

  const handleClick = (arg: any) => {
    const title = prompt('Event Title:')
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }])
    }
  }

  return (
    <div>
      <Header heading='CALENDAR' subHeading='Full Calendar Interactive Page' />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleClick}
        events={events}
      />
    </div>
  )
}

export default Calendar