import { useState } from "react";
// This is D in CRUD for deleting
// export 

function DeleteBook({ISBN, reload,SetReload}){

    // const [reload, setReload] = useState(true)

    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    // localStorage.setItem("myBooks",JSON.stringify(myBooks));

    function handleDelete(){

        myBooks = myBooks.filter((book) => book.ISBN !== ISBN);
          console.log("delete console", myBooks)
               
    
        localStorage.setItem("bookTable", JSON.stringify(myBooks));
        // window.location.reload(false)
    
    }
    return(
        <>
        <button style={{border:"2px solid white",width:"100px",height:"30px",backgroundColor:"red",marginLeft:"50px",borderRadius:"10px",marginTop:"10px",marginLeft:"5px"}} SetReload={SetReload} reload={reload} onClick={handleDelete}><span className="material-symbols-light--delete-outline"></span>delete</button>
        
        </>
    )

} 


export default DeleteBook
