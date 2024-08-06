function UpdateBook({book}){
    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
     console.log("Checking update ",myBooks)
    function Onchange(){
        console.log("update clicked")
}
    return(
        // <button style={{border:"2px solid white",width:"100px",height:"30px"}} onClick={Onchange}>update</button>
        <>
        </>

    )
}export default UpdateBook