import AddBook from "./createBook"
function Register({book}){

    // ISBN:1343-212-233-554,
    // TITTLE: "JackOfAllTrades1",
    // NU_PG: 82,
    // EDITION:"limited-Edition1",
    // PUBLSH:"Andiswa Mkhize",
    // PRICE:"R421",
    // FORMET:"A4",
    // COVERDESIGN:"https://cdn.dribbble.com/userupload/9498135/file/original-41f4f441c8ec52d782e7e5db7333a166.jpg?resize=1024x768",
    // RELEASE_DATE:"05/08/2024"
    console.log("this it is",book.TITTLE)
    function Thumela(){
        alert("Inkinga iku Brawuza,usalungiswa");
        console.log("Inkinga iku Brawuza,usalungiswa")
    }
    return (
        <>
        <AddBook/>
            <form action="" className="form">
                    <input style={{width:"350px"}} type="text" name="" id="" placeholder={book.PUBLSH} />
                    <div style={{display:"flex"}}>
                        
                        <input style={{marginLeft:"60px",width:"220px"}} type="text" name="" id="" placeholder={book.TITTLE}/>
                        <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="" id=" "placeholder={book.RELEASE_DATE}/>
                    </div>
                    <div>
                        <input style={{width:"350px"}} type="text" name="" id="" placeholder={book.EDITION} />

                    </div>
                    <div>
                            <input style={{marginLeft:"20px",width:"220px"}} type="text" name="" id="" placeholder="Nuumber of pages" />
                            <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="" id="" placeholder={book.NU_PG} />
                    </div>
                     <button style={{height:"30px",width:"70px",borderRadius:"10px",backgroundColor:"lightgreen"}} onClick={Thumela}>submit</button>
            </form>
        </>
    )
}export default Register