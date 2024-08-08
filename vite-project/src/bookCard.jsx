import DeleteBook from "./components/deleteBook"
function BookCard({books}){
    console.log("incwadi",books)
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
                <DeleteBook/>
            </div>
        </>
    )
}export default BookCard