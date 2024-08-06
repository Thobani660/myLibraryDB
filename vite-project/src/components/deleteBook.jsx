// This is D in CRUD for deleting
function DeleteBook({book}){
    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    localStorage.setItem("myBooks",JSON.stringify(myBooks))
        console.log("delete console", myBooks)
        function Onchange(){
                console.log("delete clicked")
        }
    return(
        <button style={{border:"2px solid white",width:"100px",height:"30px"}} onClick={Onchange}>delete</button>
    )

}export default DeleteBook