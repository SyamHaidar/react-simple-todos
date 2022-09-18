import { Stack } from '@mui/material'
import Footer from './Footer'
import Navbar from './Navbar'

// ----------------------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <>
      <Stack direction="column" sx={{ height: '100vh' }}>
        <Navbar />
        <Stack direction="row" justifyContent="center" sx={{ flex: 'auto', width: '100%' }}>
          <Stack
            direction="column"
            sx={{
              width: '100%',
              maxWidth: '1420px',
              '@media (min-width: 768px)': {
                flexDirection: 'row',
              },
            }}
          >
            {children}
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </>
  )
}

export default Layout
