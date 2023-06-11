import DownloadIcon from '@mui/icons-material/Download';
import { Typography, useTheme } from '@mui/material';
import Box from "@mui/material/Box";
import { tokens } from '../theme';

const DownloadReports = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      px={2}
      py={1}
      borderRadius={1}
      display={"flex"}
      columnGap={1}
      sx={{
        bgcolor: colors.blueAccent[600], cursor: "pointer",
        "&:hover": {
          bgcolor: theme.palette.mode === "dark" ? colors.blueAccent[700] : colors.blueAccent[400]
        }
      }}
    >
      <DownloadIcon sx={{ color: colors.white }} />
      <Typography fontWeight={700} color={colors.white}>
        Download Reports
      </Typography>
    </Box>
  )
}

export default DownloadReports