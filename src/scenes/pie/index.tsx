import Header from '../../components/Header'
import Box from '@mui/material/Box'
import PieChart from '../../components/PieChart'
import { Paper, useTheme } from '@mui/material'
import { tokens } from '../../theme'

const Pie = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='PIE Chart' subHeading='Simple Pie Chart' />
      </Box>

      <Paper
        sx={{
          height: "500px", width: "100%",
          p: 4,
          bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
        }}
      >
        <PieChart />
      </Paper>
    </Box>
  )
}

export default Pie