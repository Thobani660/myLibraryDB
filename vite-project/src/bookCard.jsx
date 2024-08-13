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
    // alert("Book updated successfully!");
    window.location.reload(true)

  };

  return (
    <div>
      {editMode ? (
        <form  className="form" onSubmit={handleSubmit} style={{height:"400px",marginLeft:"10px",marginTop:"10px",width:"400px"}}>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          <input type="text" name="edition" value={formData.edition} onChange={handleChange} />
          <input type="text" name="numberOfPages" value={formData.numberOfPages} onChange={handleChange} />
          <input type="text" name="coverDesign" value={formData.coverDesign} onChange={handleChange} />
          <input type="text" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
          <br></br>
          <button onClick={handleSubmit} type="submit" style={{width:"100px",height:"30px",borderRadius:"10px",backgroundColor:"lightgreen"}}>Update</button>
        </form>
      ) : (
       
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
                <div style={{display:"flex"}}>
                <button onClick={() => setEditMode(true)} style={{width:"100px",height:"30px", backgroundColor:"lightblue",borderRadius:"9px",border:"2px solid white",padding:"5px",marginTop:"10px"}}><span className="nimbus--edit"></span>Edit</button>
                <DeleteBook onClick={() => handleDelete(books.ISBN)} ISBN={books.ISBN}/>
                </div>
            </div>
        
       
      )}
    </div>
  );
}
export default BookCard;