import DeleteBook from "./components/deleteBook"
function BookCard({book}){
    // console.log("incwadi",book.COVERDESIGN)
    return(
        <>
            <div className="Card"
                  >
            <div className="cover" style={{backgroundImage:`url(${require(book.COVERDESIGN)})`}} >
                    {/* <img src={book.COVERDESIGN}/> */}
                </div>
                <div className="bookInfo">
                  <h2   style={{marginLeft:"20px",marginTop:"20px"}}>{book.TITTLE}</h2>
                  <h6 style={{color:"gray",marginTop:"00px",marginLeft:"40px"}}>by {book.PUBLSH}</h6>
                </div>
                
                <div className="price">
                    <h3 style={{marginLeft:"20px"}}>{book.PRICE}</h3>
                </div>
                <DeleteBook/>
            </div>
        </>
    )
}export default BookCard