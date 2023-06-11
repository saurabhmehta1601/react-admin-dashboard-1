import Header from '../../components/Header'
import Box from '@mui/material/Box'
import LineChart from '../../components/LineChart'

const Line = () => {
  return (
    <Box>
      <Header heading='Line' subHeading='Simple Line Chart' />
      <Box height={"500px"} width={"100%"}>
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line