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


import React, { useState } from 'react';
import DeleteBook from './components/deleteBook';
import { addBook } from './components/createBook';

function BookCard({ books, reloading, setReload }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    author: books.author,
    title: books.title,
    edition: books.edition,
    numberOfPages: books.numberOfPages,
    coverDesign: books.coverDesign,
    releaseDate: books.releaseDate,
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    addBook(formData);
    setEditMode(false);
    setReload(!reloading);
    alert("Book updated successfully!");
  };
  return (
    <div>
      {editMode ? (
        <form  className="form" onSubmit={handleSubmit} style={{height:"400px",marginLeft:"10px",marginTop:"10px"}}>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          <input type="text" name="edition" value={formData.edition} onChange={handleChange} />
          <input type="text" name="numberOfPages" value={formData.numberOfPages} onChange={handleChange} />
          <input type="text" name="coverDesign" value={formData.coverDesign} onChange={handleChange} />
          <input type="text" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
          <br></br>
          <button type="submit" style={{width:"100px",height:"30px",borderRadius:"10px"}}>Update</button>
        </form>
      ) : (
        <div style={{width:"400px",height:"300px",backgroundColor:"lightgrey",padding:"5px",wordWrap: "break-word",borderRadius:"10px",marginTop:"20px"}} >
         <div className="Card">
                 <div className="cover" style={{backgroundImage:`url(${require(books.coverDesign)})`}} >
                </div>
                <div className="bookInfo">
                  <h2   style={{marginLeft:"20px",marginTop:"20px"}}>{books.title}</h2>
                  <h6 style={{color:"gray",marginTop:"00px",marginLeft:"40px"}}>by {books.author}</h6>
                </div>
                
                <div className="price">
                    <h3 style={{marginLeft:"20px"}}>{books.price}</h3>
                </div>
                <DeleteBook onClick={() => handleDelete(books.ISBN)} ISBN={books.ISBN}/>
            </div>
          <button onClick={() => setEditMode(true)} style={{width:"100px", backgroundColor:"lightblue",borderRadius:"5px",border:"none",padding:"5px"}}><span class="nimbus--edit"></span>Edit</button>
          <DeleteBook ISBN={books.ISBN} reloading={reloading} setReload={setReload} />
        </div>
      )}
    </div>
  );
}
export default BookCard;