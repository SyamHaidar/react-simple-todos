import { Box } from '@mui/material'

// ----------------------------------------------------------------------

export default function SvgIcon({ icon, sx }) {
  return (
    <Box
      component="span"
      sx={{
        width: 18,
        height: 18,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url('/static/icons/${icon}.svg') no-repeat center / contain`,
        WebkitMask: `url(/static/icons/${icon}.svg) no-repeat center / contain`,
        ...sx,
      }}
    />
  )
}
