import Header from '../../components/Header'
import Box from '@mui/material/Box'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
    <Box>
      <Header heading='PIE Chart' subHeading='Simple Pie Chart' />
      <Box height={"500px"} width={"100%"}>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie