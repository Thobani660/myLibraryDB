import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddBook from './components/create'
import DisplayBook from './components/read'
import UpdateBook from './components/update'
import DeleteBook from './components/delete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddBook/>
      <DisplayBook/>
      <UpdateBook/>
      <DeleteBook/>
    </>
  )
}

export default App
