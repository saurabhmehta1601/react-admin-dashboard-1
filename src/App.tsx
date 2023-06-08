import { ThemeProvider } from "@emotion/react"
import { ColorModeContext, useMode } from "./theme"
import { Box, CssBaseline } from "@mui/material"
import Topbar from "./scenes/global/Topbar"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar"

function App() {
  const [theme, colorMode] = useMode()
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ColorModeContext.Provider value={colorMode as any} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" width="100%">
          <Sidebar />
          <Box className="content" flex={1}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
