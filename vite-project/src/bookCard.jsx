function BookCard({book}){
    console.log("incwadi",book.COVERDESIGN)
    return(
        <>
            <div className="Card"
                  >
            <div className="cover" style={{backgroundImage:`url(${require(book.COVERDESIGN)})`}} >
                    {/* <img src={book.COVERDESIGN}/> */}
                </div>
                <div className="bookInfo">
                  <h2   style={{marginLeft:"-30px"}}>{book.TITTLE}</h2>
                  <h6 style={{color:"gray",marginTop:"-20px",marginLeft:"-130px"}}>by {book.PUBLSH}</h6>
                </div>
                
                <div className="price">
                    <h3 style={{marginLeft:"-180px"}}>{book.PRICE}</h3>
                </div>
            </div>
        </>
    )
}export default BookCard