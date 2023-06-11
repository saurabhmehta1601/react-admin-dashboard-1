import BarChart from '../../components/BarChart'
import Header from '../../components/Header'
import Box from '@mui/material/Box'
  
const Bar = () => {
  
  return (
    <div>
      <Header heading="Bar Chart" subHeading='Simple Bar Chart' />
      <Box sx={{ height: "500px", width: "100%" }}>
        <BarChart />
      </Box>
    </div>
  )
}

export default Bar