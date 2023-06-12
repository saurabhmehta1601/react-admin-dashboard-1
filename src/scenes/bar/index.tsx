import { useTheme } from '@mui/material'
import BarChart from '../../components/BarChart'
import Header from '../../components/Header'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { tokens } from '../../theme'

const Bar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading="Bar Chart" subHeading='Simple Bar Chart' />
      </Box>
      <Paper sx={{ height: "500px", width: "100%", bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white }}>
        <BarChart />
      </Paper>
    </Box>
  )
}

export default Bar