import Box from "@mui/material/Box"
import LineChart from "./LineChart"
import IconButton from "@mui/material/IconButton"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const RevenueGenerated = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Paper sx={{
      p: 4,
      width: "100%",
      bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.white
    }}>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <Box>
          <Typography> Revenue Generated </Typography>
          <Typography
            variant="h4"
            color={colors.greenAccent[500]}
            fontWeight={700}
          >
            $56,686,343.67
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <FileDownloadIcon />
          </IconButton>
        </Box>
      </Box>
      <Box height={"250px"}>
        <LineChart compact={true} />
      </Box>
    </Paper>
  )
}

export default RevenueGenerated