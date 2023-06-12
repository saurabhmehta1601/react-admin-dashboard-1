import { Paper, useTheme } from '@mui/material'
import ChoroplethChart from '../../components/ChoroplethChart'
import Header from '../../components/Header'
import Box from "@mui/material/Box"
import { tokens } from '../../theme'

const Geo = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='GEO' subHeading='Simple Geography Chart' />
      </Box>
      <Paper
        sx={{
          border: `1px solid ${colors.grey[100]}`,
          height: "500px",
          bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
        }}
      >
        <ChoroplethChart />
      </Paper>
    </Box>
  )
}

export default Geo