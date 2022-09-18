import { useState } from 'react'
// @mui
import { Box } from '@mui/material'
// todo
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
// layout
import Layout from './layouts/Layout'
// theme
import ThemeProvider from './theme'

// ----------------------------------------------------------------------

function App() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState({ title: '', description: '', date: Date.now() })

  const addTodos = (e) => {
    e.preventDefault()
    setTodos((todos) => [...todos, value])
    setValue({ title: '', description: '' })
  }

  const deleteTodos = (id) => {
    const newTodos = todos.filter((_, index) => index !== id)
    setTodos(newTodos)
  }

  console.log(todos)

  return (
    <ThemeProvider>
      <Layout>
        <Box sx={{ minWidth: '380px', padding: '24px 16px' }}>
          <TodoForm
            title={value.title}
            description={value.description}
            handleTitle={(e) => setValue({ ...value, title: e.target.value })}
            handleDescription={(e) => setValue({ ...value, description: e.target.value })}
            saveTodo={addTodos}
          />
        </Box>
        <Box sx={{ flex: 'auto', minWidth: '380px', padding: '24px 16px' }}>
          <TodoList todos={todos} handleDelete={deleteTodos} />
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default App
