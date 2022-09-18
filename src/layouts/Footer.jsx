// @mui
import { Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const Footer = () => {
  return (
    <>
      <Stack justifyContent="center" sx={{ height: '48px' }}>
        <Typography
          component="a"
          href="https://github.com/SyamHaidar"
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', textDecoration: 'none' }}
        >
          &copy; {new Date().getFullYear()} SyamHaidar.
        </Typography>
      </Stack>
    </>
  )
}

export default Footer
