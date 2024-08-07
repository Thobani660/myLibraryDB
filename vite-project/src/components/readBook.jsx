// This is the R in CRUD  and it displays 
import BookCard from "../bookCard";

function DisplayBook({book}) {

    
    
  
  const storedBooks = localStorage.getItem("bookTable");
  const maping =  JSON.parse(storedBooks)
 console.log(storedBooks,"myfoot")
  return (
    <>
        {maping.map((book,index) => (
        <BookCard key={index} book={book} />
      ))}
    </>
  );
}

export default DisplayBook;