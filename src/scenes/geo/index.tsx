import ChoroplethChart from '../../components/ChoroplethChart'
import Header from '../../components/Header'
import Box from "@mui/material/Box"

const Geo = () => {
  return (
    <Box>
      <Header heading='GEO' subHeading='Simple Geography Chart' />
      <Box width="100%" height={"500px"} >
        <ChoroplethChart />
      </Box>
    </Box>
  )
}

export default Geo