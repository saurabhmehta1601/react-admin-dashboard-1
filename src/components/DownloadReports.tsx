import DownloadIcon from '@mui/icons-material/Download';
import { Typography, useTheme } from '@mui/material';
import Box from "@mui/material/Box";
import { tokens } from '../theme';

const DownloadReports = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      px={3}
      py={2}
      borderRadius={1}
      display={"flex"}
      columnGap={1}
      sx={{
        bgcolor: colors.blueAccent[600], cursor: "pointer",
        "&:hover": {
          bgcolor: colors.blueAccent[700]
        }
      }}
    >
      <DownloadIcon sx={{ color: colors.grey[100] }} />
      <Typography fontWeight={700}>
        Download Reports
      </Typography>
    </Box>
  )
}

export default DownloadReports