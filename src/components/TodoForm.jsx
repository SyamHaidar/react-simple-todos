import { Card, Stack, TextField, Typography } from '@mui/material'
import ButtonStyle from '../styles/ButtonStyle'

// ----------------------------------------------------------------------

const TodoForm = ({ title, handleTitle, description, handleDescription, saveTodo }) => {
  return (
    <Card variant="outlined" sx={{ padding: '24px' }}>
      <Stack spacing={2} direction="column">
        <Typography variant="h6" component="h1">
          Add todos
        </Typography>
        <TextField label="Title" multiline value={title} onChange={handleTitle} />
        <TextField label="Description" multiline value={description} onChange={handleDescription} />
        <ButtonStyle onClick={saveTodo} text="Save" variant="contained" />
      </Stack>
    </Card>
  )
}

export default TodoForm
