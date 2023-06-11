import Header from '../../components/Header'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import Box from '@mui/material/Box'

const Calendar = () => {
  const [events, setEvents] = useState<{ title: string, date: string }[]>([])

  const handleClick = (arg: any) => {
    const title = prompt('Event Title:')
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }])
    }
  }

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='CALENDAR' subHeading='Full Calendar Interactive Page' />
      </Box>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleClick}
        events={events}
      />
    </Box>
  )
}

export default Calendar