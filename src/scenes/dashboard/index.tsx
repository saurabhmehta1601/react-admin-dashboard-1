import Box from '@mui/material/Box'
import Header from '../../components/Header'
import DownloadReports from '../../components/DownloadReports'
import StatsCard from '../../components/StatsCard'
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import { useMediaQuery, useTheme } from "@mui/material"

const Dashboard = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

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

      <Box
        display={"grid"}
        gridTemplateColumns={isMobile ? "1fr" : isDesktop ? "1fr 1fr 1fr 1fr" : "1fr 1fr"}
        columnGap={1}
        rowGap={1}
      >
        <StatsCard value='16,839' name='Emails Sent' percentage={19} Icon={EmailIcon} />
        <StatsCard value='1579' name='Happy Customers' percentage={89} Icon={EmojiEmotionsIcon} />
        <StatsCard value='368' name='Cities Covered' percentage={49} Icon={LocationOnIcon} />
        <StatsCard value='45' name='Response Time' percentage={19} Icon={TimerIcon} />
      </Box>
    </Box>
  )
}

export default Dashboard