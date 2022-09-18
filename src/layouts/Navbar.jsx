// @mui
import { Divider, Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const Navbar = () => {
  return (
    <>
      <Stack justifyContent="center" sx={{ height: '64px' }}>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
          Simple Todos
        </Typography>
      </Stack>
      <Divider />
    </>
  )
}

export default Navbar
