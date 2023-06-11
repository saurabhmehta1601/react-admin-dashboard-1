import { Box, Paper, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"
import BarChart from "./BarChart"
import ChoroplethChart from "./ChoroplethChart"

const GeographyBasedTrafficCard = () => {
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
      <Typography variant="h5" fontWeight={700}>Sales Quantity</Typography>
      <Box
        mt={2}
        width={"100%"}
        height={"220px"}
        borderRadius={1}
        border={`2px solid ${colors.primary[100]}`}
      >
        <ChoroplethChart compact={true} />
      </Box>
    </Paper >
  )
}

export default GeographyBasedTrafficCard