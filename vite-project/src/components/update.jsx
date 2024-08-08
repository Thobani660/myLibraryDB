// import React, { useState } from 'react';
// import { addBook } from './createBook';

// function UpdateBook({ book,ISBN }) {
//   const [updatedBook, setUpdatedBook] = useState(book);
//   const myBooks = JSON.parse(localStorage.getItem("bookTable"));

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const updatedBooks = myBooks.map((b) => {
//       if (b.id === updatedBook.id) {
//         return updatedBook;
//       }
//       return b;
//     });
//     localStorage.setItem("bookTable", JSON.stringify(updatedBooks));
//     console.log("Book updated successfully!");
//   };

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setUpdatedBook({ ...updatedBook, [name]: value });
//   };

//   function handleCancel() {
//     setUpdatedBook(book);
//   }

// //   function resetForm() {
// //     setUpdatedBook(book);
// //   }

//   return (
//     <form action="" className="form" onSubmit={handleUpdate}>
//     <div className="MainDiv">
//         <input style={{width:"350px"}} type="text" name="author" id="" placeholder="AuthersName" value={updatedBook.author}   onChange={handleInputChange} />
//         <div style={{display:"flex"}}>
//             <input style={{marginLeft:"60px",width:"220px"}} type="text" name="title" id="" value={updatedBook.title} placeholder="Title"  onChange={handleInputChange} />
//             <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="releaseDate" id=" " placeholder="ReleaseDate" onChange={handleInputChange} />
//         </div>
//         <div>
//             <input style={{width:"350px"}} type="text" name="edition" value={updatedBook.edition} id=""  placeholder="r" onChange={handleInputChange} />
//         </div>
//         <div>
//             <input style={{marginLeft:"20px",width:"220px"}} type="text" name="numberOfPages" value={updatedBook.ISBN}  id="" placeholder="ISBN"  onChange={handleInputChange} />
//             <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="pages" id="" placeholder="Pages"  onChange={handleInputChange} />
//         </div>
//         <div>
//             <input style={{width:"350px"}} type="text" name="coverDesign" id="" placeholder="CoverDesign" value={updatedBook.coverDesign}   onChange={handleInputChange} />
//         </div>
//         <div>
//             <input style={{marginLeft:"20px",width:"220px"}} type="text" name="numPages" id="" placeholder="Nuumber of pages"  onChange={handleInputChange} />
//             <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="pages" id="" placeholder="Pages"  onChange={handleInputChange} />
//         </div>
  
//         <button style={{height:"30px",width:"70px",borderRadius:"10px",backgroundColor:"lightgreen"}} type="submit">Submit</button>
//         <button style={{height:"30px",width:"70px",borderRadius:"10px",backgroundColor:"lightgray"}} type="button" onClick={handleCancel}>Cancel</button>    </div>
//   </form>
    
//   );

// }

// export default UpdateBook;