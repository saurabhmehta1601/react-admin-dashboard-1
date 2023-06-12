import Header from '../../components/Header'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import Box from '@mui/material/Box'
import { Paper, useTheme } from '@mui/material'
import { tokens } from '../../theme'

const Calendar = () => {
  const [events, setEvents] = useState<{ title: string, date: string }[]>([])
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

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

      <Paper sx={{
        p: 4,
        bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
      }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleClick}
          events={events}
        />
      </Paper>
    </Box>
  )
}

export default Calendar