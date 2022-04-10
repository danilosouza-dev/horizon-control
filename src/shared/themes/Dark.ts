import { createTheme } from '@mui/material'
import { blue, deepPurple, grey} from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[200],
      dark: blue[600],
      contrastText: "#FFF"
    },
    secondary: {
      main: deepPurple[500],
      light: deepPurple[50],
      dark: deepPurple[600],
      contrastText: "#FFF"
    },
    background: {
      default: "#383838",
      paper: grey[900]
    }
  }
})