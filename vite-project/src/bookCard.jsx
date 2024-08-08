import DeleteBook from "./components/deleteBook"


function BookCard({books, setReload}){
// const [reloads, setShowDelete] = useState(false)

    const handleDelete = (ISBN) => {
        setReload(!reload);
        DeleteBook.deleteBook(ISBN)
      };
    // console.log("incwadi",books)
    return(
        <>
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
        
        </>
    )
}export default BookCard