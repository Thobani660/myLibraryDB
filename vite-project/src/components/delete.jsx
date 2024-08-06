// This is D in CRUD for deleting
function DeleteBook({book}){
    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    localStorage.setItem("myBooks",JSON.stringify(myBooks))
        console.log("delete console", myBooks)
    return(
        <button>delete</button>
    )

}export default DeleteBook