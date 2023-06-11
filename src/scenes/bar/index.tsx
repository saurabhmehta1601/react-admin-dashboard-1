import BarChart from '../../components/BarChart'
import Header from '../../components/Header'
import Box from '@mui/material/Box'

const Bar = () => {

  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading="Bar Chart" subHeading='Simple Bar Chart' />
      </Box>
      <Box sx={{ height: "500px", width: "100%" }}>
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar