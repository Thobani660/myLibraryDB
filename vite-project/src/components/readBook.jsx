// This is the R in CRUD  and it displays 
import BookCard from "../bookCard";

function DisplayBook({book}) {

  return (
    <>
       <div className="book-container">
            <div className="book-grid">
                {book.map((Trial, index) => (
                <BookCard key={index} books={Trial} />
                ))}
            </div>
         </div>

    </>
  );
}

export default DisplayBook;