import Box from '@mui/material/Box'
import Header from '../../components/Header'
import DownloadReports from '../../components/DownloadReports'

const Dashboard = () => {

  return (
    <Box>
      <Box
        mt={5}
        mb={3}
        display={"flex"}
        alignItems={"end"}
        justifyContent={"space-between"} >
        <Header heading="DASHBOARD" subHeading="Welcome to Dashboard" />
        <DownloadReports />
      </Box>
    </Box>
  )
}

export default Dashboard