import Header from '../../components/Header'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import LineChart from '../../components/LineChart'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

const Line = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='Line' subHeading='Simple Line Chart' />
      </Box>
      <Paper
        sx={{
          height: "500px", width: "100%",
          p: 4,
          bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
        }}
      >
        <LineChart />
      </Paper>
    </Box>
  )
}

export default Line