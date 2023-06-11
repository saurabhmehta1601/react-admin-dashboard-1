import Box from '@mui/material/Box'
import Header from '../../components/Header'
import DownloadReports from '../../components/DownloadReports'
import StatsCard from '../../components/StatsCard'
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import RevenueGenerated from '../../components/RevenueGenerated';
import { useMediaQuery, useTheme } from '@mui/material';


const Dashboard = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Box>
      <Box
        mt={5}
        mb={3}
        display={"flex"}
        flexWrap={"wrap"}
        rowGap={1}
        columnGap={1}
        alignItems={"end"}
        justifyContent={"space-between"}
      >
        <Header heading="DASHBOARD" subHeading="Welcome to Dashboard" />
        <DownloadReports />
      </Box>

      {/* Stat Cards */}
      <Box
        display={"flex"}
        justifyContent={"stretch"}
        flexWrap={"wrap"}
        columnGap={1}
        rowGap={1}
      >
        <Box flex={1}>
          <StatsCard value='16,839' name='Emails Sent' percentage={19} Icon={EmailIcon} />
        </Box>
        <Box flex={1}>
          <StatsCard value='1579' name='Happy Customers' percentage={89} Icon={EmojiEmotionsIcon} />
        </Box>
        <Box flex={1}>
          <StatsCard value='368' name='Cities Covered' percentage={49} Icon={LocationOnIcon} />
        </Box>
        <Box flex={1}>
          <StatsCard value='45' name='Response Time' percentage={19} Icon={TimerIcon} />
        </Box>
      </Box>

      {/* ROW 2 */}
      <Box
        display={"flex"}
        flexWrap={ isDesktop ? undefined : "wrap"}
        mt={2}
        columnGap={1}
        rowGap={1}>
        <Box flex={2}> <RevenueGenerated /> </Box>
        <Box flex={1}> <RevenueGenerated /> </Box>
      </Box>
    </Box>
  )
}

export default Dashboard