import { Box, Paper, Typography, useTheme, CircularProgress } from "@mui/material"
import { tokens } from "../theme"

const CampaignCard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Paper
      sx={{
        height: "100%",
        p: 4,
        bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
      }}
    >
      <Typography variant="h5" fontWeight={700}>Campaign</Typography>
      <Box p={4}
        display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box position={"relative"}>
          <CircularProgress variant="determinate" thickness={8} size={120} value={100}
            sx={{
              position: "absolute",
              color: colors.primary[500]
            }} />
          <CircularProgress variant="determinate" thickness={8} size={120} value={50}
            sx={{ color: colors.greenAccent[500] }} />
        </Box>
      </Box>
      <Typography color={colors.greenAccent[500]} textAlign={"center"}>$48,352 revenue generated</Typography>
      <Typography variant="body2" textAlign={"center"}>Includes extra misc expenditures and costs</Typography>
    </Paper >
  )
}

export default CampaignCard