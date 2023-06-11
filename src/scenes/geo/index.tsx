import { useTheme } from '@mui/material'
import ChoroplethChart from '../../components/ChoroplethChart'
import Header from '../../components/Header'
import Box from "@mui/material/Box"
import { tokens } from '../../theme'

const Geo = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      <Header heading='GEO' subHeading='Simple Geography Chart' />
      <Box width="100%" height={"500px"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <ChoroplethChart />
      </Box>
    </Box>
  )
}

export default Geo