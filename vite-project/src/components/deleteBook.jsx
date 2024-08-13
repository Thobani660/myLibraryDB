import { useState } from "react";

// This is D in CRUD for deleting
function DeleteBook({ISBN,reloading}){

    const [reload, setReload] = useState(!true)

    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    localStorage.setItem("myBooks",JSON.stringify(myBooks))

        function handleDelete(){

                myBooks = myBooks.filter((book) => book.ISBN !== ISBN);
                  console.log("delete console", myBooks)
                  setReload(!reload);

                localStorage.setItem("bookTable", JSON.stringify(myBooks));
                window.location.reload(false)

        }
    return(
        <>
        <button style={{border:"2px solid white",width:"100px",height:"30px",backgroundColor:"red",marginLeft:"50px",borderRadius:"10px",marginTop:"10px",marginLeft:"5px"}} onClick={handleDelete}><span className="material-symbols-light--delete-outline"></span>delete</button>
        
        </>
    )

}export default DeleteBook

// import React, { useState, useEffect } from 'react';
// import DeleteBook from './DeleteBook';

// function BookList() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const storedBooks = JSON.parse(localStorage.getItem("bookTable"));
//     setBooks(storedBooks);
//   }, []);

//   const handleDelete = (book) => {
//     const updatedBooks = books.filter((item) => item !== book);
//     setBooks(updatedBooks);
//     localStorage.setItem("bookTable", JSON.stringify(updatedBooks));
//   };

//   return (
//     <div>
//       {books.map((book) => (
//         <div key={book}>
//           <DeleteBook book={book} handleDelete={handleDelete} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BookList;