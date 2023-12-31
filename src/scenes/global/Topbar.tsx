import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import NotificationsIcon from "@mui/icons-material/Notifications"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between">
      {/* SEARCH BAR */}
      <Box
        display="flex"
        border={`1.5px solid ${colors.primary[900]}`}
        px={2} alignItems="center"
        borderRadius={"4px"}
        sx={{ bgcolor: colors.white }}
      >
        <InputBase sx={{ flex: 1, color: colors.black }} placeholder='Search' />
        <SearchOutlinedIcon sx={{ color: colors.black }} />
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => colorMode.toggleColorMode()}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

      </Box>
    </Box>
  )
}

export default Topbar