import {
  createTheme,
  CssBaseline,
  darkScrollbar,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'

// ----------------------------------------------------------------------

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          minHeight: '100vh',
        },
      },
    },
  },
})

export default function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
