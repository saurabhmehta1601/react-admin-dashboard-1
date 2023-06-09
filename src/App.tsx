import { ThemeProvider } from "@emotion/react"
import { ColorModeContext, useMode } from "./theme"
import { Box, CssBaseline } from "@mui/material"
import Topbar from "./scenes/global/Topbar"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar"
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"
import Form from "./scenes/form"
import Calendar from "./scenes/calendar"
import FAQ from "./scenes/faq"
import Bar from "./scenes/bar"
import Line from "./scenes/line"
import Pie from "./scenes/pie"
import Geo from "./scenes/geo"

function App() {
  const [theme, colorMode] = useMode()
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ColorModeContext.Provider value={colorMode as any} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" width="100%" height="100vh">
          <Sidebar />
          <Box className="content" flex={1} p={2}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geo" element={<Geo />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
