import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { CircularProgress, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"

interface IProps {
  Icon: any
  value: string
  name: string
  percentage: number
}
const StatsCard = ({ Icon, value, name, percentage }: IProps) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Paper sx={{
      p: 4,
      height: "100%",
      bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
    }}>
      <Box display={"flex"} columnGap={4} justifyContent={"space-between"}>
        <Box>
          <Icon size="large" fontSize="large" sx={{ color: colors.greenAccent[500] }} />
          <Typography fontWeight={700} variant="h5" mt={1}>{value}</Typography>
        </Box>
        <Box position={"relative"}>
          {/* Progress */}
          <CircularProgress
            variant="determinate"
            value={100}
            sx={{
              color: colors.blueAccent[800],
            }}
            thickness={5}
          />
          <CircularProgress
            variant="determinate"
            value={percentage}
            sx={{
              position: "absolute",
              left: 0,
              color: colors.greenAccent[600],
            }}
            thickness={5}
          />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6" color={colors.greenAccent[500]}>{name}</Typography>
        <Typography color={colors.greenAccent[600]} fontStyle={"italic"}>+{percentage}%</Typography>
      </Box>
    </Paper>
  )
}

export default StatsCard