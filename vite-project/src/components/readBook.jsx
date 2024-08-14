// This is the R in CRUD  and it displays 
import { useState } from "react";
import BookCard from "../bookCard";

function DisplayBook() {


    const [reload, setReload] = useState(true);

    let newData = JSON.parse(localStorage.getItem("bookTable"));
    console.log(newData,"this is library")

  return (
    <>
       <div className="book-container">
            <div className="book-grid">
                {newData.map((Trial, index) => (
                   <BookCard reload={reload} setReload={setReload} key={index} books={Trial} />
                ))}
            </div>
         </div>

    </>
  );
}

export default DisplayBook;