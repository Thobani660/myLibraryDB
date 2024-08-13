import { useState } from 'react'
import './App.css'
import {addBook} from './components/createBook'
import DisplayBook from './components/readBook'
// import UpdateBook from './components/update'
import DeleteBook from './components/deleteBook'
import BookCard from './bookCard'
import Register from './components/register'
function App() {

  const [count, setCount] = useState(0)
  
  let bookTable = [{id:"booksTable",
    ISBN:1343-212-233-554,
    title: "Stay Woke",
    numberOfPages: 82,
    edition:"limited-edition1",
    author:"Philasande Zondi",
    price:"R421",
    formet:"A4",
    coverDesign:"https://images-cdn.9gag.com/photo/aZ3GNV0_700b.jpg",
    releaseDate:"05/08/2024"
  },
  {id:"AuthersTable",
    ISBN:2143-212-233-554,
    title: "Rich Dad",
    NumberOfPages: 72,
    edition:"limited-edition2",
    author:"Philasande Zondi",
    price:"R521",
    formet:"A4",
    coverDesign:"https://th.bing.com/th/id/OIP.Krc5-s9mlNDmfIPI4SpkBgHaMW?w=118&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    releaseDate:"05/08/2024"
  },
  {id:"booksTable",
    ISBN:4543-212-233-554,
    title: "Awake",
    NumberOfPages: 62,
    edition:"limited-edition3",
    author:"Philasande Zondi",
    price:"R621",
    formet:"A4",
    coverDesign:"https://th.bing.com/th/id/OIP.Z8hO15EYFhYMrcLQFyLIhwAAAA?w=197&h=316&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    releaseDate:"05/08/2024"
  }];
 
  //  localStorage.setItem("bookTable",JSON.stringify(bookTable));
  const maping =  JSON.parse(localStorage.getItem("bookTable"))
  // console.log("maping search",maping)

  return (
    <>
        <div style={{display:"flex"}}>
          <div>
              {/* <Register /> */}
          </div>
          <div style={{display:"grid"}}>
             <DisplayBook book={maping}/>
          </div>
          {/* <UpdateBook/> */}
         
       
            
        </div>
    </>
  )
}

export default App
