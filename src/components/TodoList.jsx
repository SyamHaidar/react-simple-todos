import { Card, IconButton, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import SvgIcon from './SvgIcon'

// ----------------------------------------------------------------------

const Todo = ({ data, handleDelete }) => {
  const [isDone, setIsDone] = useState(false)
  const handleDone = () => setIsDone(!isDone)

  const button = [
    {
      onClick: handleDone,
      color: !isDone ? 'success' : 'primary',
      icon: !isDone ? 'check' : 'minus',
    },
    { onClick: handleDelete, color: 'secondary', icon: 'trash' },
  ]

  return (
    <Card
      sx={{
        width: '100%',
        marginRight: '0',
        marginBottom: '16px',
        '@media (min-width: 768px)': {
          marginRight: '16px',
          maxWidth: '320px',
        },
      }}
    >
      <Stack direction="column" sx={{ height: '100%', padding: '16px' }}>
        <Stack direction="column" sx={{ flex: 'auto', marginBottom: '24px' }}>
          <Typography gutterBottom variant="h6" component="h1">
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': '5',
              wordBreak: 'break-word',
            }}
          >
            {data.description}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginTop: 'auto',
            width: '100%',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              backgroundColor: isDone ? '#09923d29' : '#323232',
              color: isDone ? '#09923d' : '#c5c5c5',
              padding: '2px 8px',
              borderRadius: '4px',
              fontWeight: 500,
            }}
          >
            {!isDone ? 'Todo' : 'Done'}
          </Typography>
          <Stack direction="row" spacing={0.5}>
            {button.map((item, index) => (
              <IconButton
                key={index}
                onClick={item.onClick}
                variant="outlined"
                color={item.color}
                size="small"
              >
                <SvgIcon icon={item.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

const TodoList = ({ todos, handleDelete }) => {
  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      {todos &&
        todos.map((item, index) => (
          <Todo key={index} data={item} handleDelete={() => handleDelete(index)} />
        ))}
    </Stack>
  )
}

export default TodoList
