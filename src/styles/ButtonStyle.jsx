import { Button, styled } from '@mui/material'

// ----------------------------------------------------------------------

const CustomButton = styled(Button)({
  backgroundColor: '#f2d012',
  borderColor: '#f2d012',
  fontWeight: '700',
  '&:hover': {
    backgroundColor: '#f2ba12',
    borderColor: '#f2ba12',
  },
})

const ButtonStyle = ({ text, sx, ...other }) => {
  return (
    <CustomButton sx={sx} {...other}>
      {text}
    </CustomButton>
  )
}

export default ButtonStyle
