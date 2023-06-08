import { ThemeProvider } from "@emotion/react"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline } from "@mui/material"
import Topbar from "./scenes/global/Topbar"

function App() {
  const [theme, colorMode] = useMode()
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ColorModeContext.Provider value={colorMode as any} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
          <Topbar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
