// This is D in CRUD for deleting
function DeleteBook({ISBN}){


    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    localStorage.setItem("myBooks",JSON.stringify(myBooks))

        function handleDelete(){
                // console.log("delete clicked",myBooks)

                myBooks = myBooks.filter((book) => book.ISBN !== ISBN);
        console.log("delete console", myBooks)





        useEffect(() => {
                const storedBooks = JSON.parse(localStorage.getItem("bookTable"));
                setBooks(storedBooks);
              }, []);
            
              const handleDelete = (book) => {
                const updatedBooks = books.filter((item) => item !== book);
                setBooks(updatedBooks);
                localStorage.setItem("bookTable", JSON.stringify(updatedBooks));
              };

                localStorage.setItem("bookTable", JSON.stringify(myBooks));
                // console.log("this is",myBooks)

        }
    return(
        <>
        <button style={{border:"2px solid white",width:"100px",height:"30px"}} onClick={handleDelete}>delete</button>
        
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