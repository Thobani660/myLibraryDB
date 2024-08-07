// This is D in CRUD for deleting
function DeleteBook({book}){

    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    localStorage.setItem("myBooks",JSON.stringify(myBooks))

        console.log("delete console", myBooks)
        function handleDelete(){
                console.log("delete clicked",myBooks)

                myBooks = myBooks.filter((handleChange) => handleChange !== book);

                localStorage.setItem("bookTable", JSON.stringify(myBooks));
                console.log("this is",myBooks)

                

        }
    return(
        <>
        <button style={{border:"2px solid white",width:"100px",height:"30px"}} onClick={handleDelete}>delete</button>
        
        </>
    )

}export default DeleteBook