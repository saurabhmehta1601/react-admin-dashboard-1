import { Box, Paper, Typography, useTheme, CircularProgress } from "@mui/material"
import { tokens } from "../theme"
import BarChart from "./BarChart"

const SalesQuantityCard = () => {
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
        width={"100%"}
        height={"220px"}
      >
        <BarChart compact={true} />
      </Box>
    </Paper >
  )
}

export default SalesQuantityCard