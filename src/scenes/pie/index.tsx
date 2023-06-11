import Header from '../../components/Header'
import Box from '@mui/material/Box'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
    <Box>
      <Box mt={5} mb={3}>
        <Header heading='PIE Chart' subHeading='Simple Pie Chart' />
      </Box>
      <Box height={"500px"} width={"100%"}>
        <PieChart />
        B</Box>
    </Box>
  )
}

export default Pie