import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes'
import { LightTheme } from './shared/themes'

export function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}