import { useState } from 'react'
import './App.css'
import {addBook} from './components/createBook'
import DisplayBook from './components/readBook'
import UpdateBook from './components/update'
import DeleteBook from './components/deleteBook'
import BookCard from './bookCard'
import Register from './components/register'
function App() {

  const [count, setCount] = useState(0)
  
  let bookTable = [{id:"booksTable",
    ISBN:1343-212-233-554,
    TITTLE: "JackOfAllTrades1",
    NU_PG: 82,
    EDITION:"limited-Edition1",
    PUBLSH:"Philasande Zondi",
    PRICE:"R421",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th?q=Jack+of+All+Trades+Facebook+Cover&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-ZA&cc=ZA&setlang=en&adlt=moderate&t=1&mw=247",
    RELEASE_DATE:"05/08/2024"
  },
  {id:"AuthersTable",
    ISBN:2143-212-233-554,
    TITTLE: "Rich Dad",
    NU_PG: 72,
    EDITION:"limited-Edition2",
    PUBLSH:"Philasande Zondi",
    PRICE:"R521",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.Krc5-s9mlNDmfIPI4SpkBgHaMW?w=118&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  },
  {id:"booksTable",
    ISBN:4543-212-233-554,
    TITTLE: "Awake",
    NU_PG: 62,
    EDITION:"limited-Edition3",
    PUBLSH:"Philasande Zondi",
    PRICE:"R621",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.Z8hO15EYFhYMrcLQFyLIhwAAAA?w=197&h=316&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  }];
 
   localStorage.setItem("bookTable",JSON.stringify(bookTable));

  return (
    <>
        <div style={{display:"flex"}}>
            <BookCard    book={bookTable[0]}/>
            {/* <AddBook     book={bookTable[0]}/> */}
            <DisplayBook book={bookTable[0]}/>
            {/* <UpdateBook book={bookTable[0]}/> */}
            <DeleteBook book={bookTable[0]}/>
            <Register books={addBook} />
            
        </div>
    </>
  )
}

export default App
