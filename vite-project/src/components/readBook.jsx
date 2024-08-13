// This is the R in CRUD  and it displays 
import { useState } from "react";
import BookCard from "../bookCard";

function DisplayBook({book}) {
    const [reload, setReload] = useState(true);

  return (
    <>
       <div className="book-container">
            <div className="book-grid">
                {book.map((Trial, index) => (
                <BookCard setReload={setReload} key={index} books={Trial} />
                ))}
            </div>
         </div>

    </>
  );
}

export default DisplayBook;