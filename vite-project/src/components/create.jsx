function AddBook({book}){
    // localStorage.setItem("book",JSON.stringify(book))
    // const storedBookTable = localStorage.getItem('bookTable');
    // const userData = JSON.parse(storedBookTable);
    // console.log("lets check",userData)
    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    console.log("list",myBooks);
    console.log("prop of the ADDBOOK",book);

    myBooks.push(book);
    console.log("newConsole",myBooks)
    localStorage.setItem("myBooks",JSON.stringify(myBooks))


    return(
        <>
        {/* <h1>{book}</h1> */}
        </>
    )
}export default AddBook