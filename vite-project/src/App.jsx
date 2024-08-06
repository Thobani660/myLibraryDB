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
  
  let bookTable = [{id:"booksTable",
    ISBN:1343-212-233-554,
    TITTLE: "JackOfAllTrades1",
    NU_PG: 82,
    EDITION:"limited-Edition1",
    PUBLSH:"Andiswa",
    PRICE:"R421",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.ggUdsh7LpfPtjyFzh-XqCgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  },
  {id:"AuthersTable",
    ISBN:2143-212-233-554,
    TITTLE: "JackOfAllTrades2",
    NU_PG: 72,
    EDITION:"limited-Edition2",
    PUBLSH:"Andiswa",
    PRICE:"R521",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.ggUdsh7LpfPtjyFzh-XqCgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  },
  {id:"booksTable",
    ISBN:4543-212-233-554,
    TITTLE: "JackOfAllTrades3",
    NU_PG: 62,
    EDITION:"limited-Edition3",
    PUBLSH:"Andiswa",
    PRICE:"R621",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.ggUdsh7LpfPtjyFzh-XqCgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  }];
 
   localStorage.setItem("bookTable",JSON.stringify(bookTable));

  return (
    <>
      <AddBook book={bookTable[0]}/>
      <DisplayBook book={bookTable[0]}/>
      <UpdateBook book={bookTable[0]}/>
      <DeleteBook book={bookTable[0]}/>
    </>
  )
}

export default App
