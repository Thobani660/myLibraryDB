function Register({boook}){

    // ISBN:1343-212-233-554,
    // TITTLE: "JackOfAllTrades1",
    // NU_PG: 82,
    // EDITION:"limited-Edition1",
    // PUBLSH:"Andiswa Mkhize",
    // PRICE:"R421",
    // FORMET:"A4",
    // COVERDESIGN:"https://cdn.dribbble.com/userupload/9498135/file/original-41f4f441c8ec52d782e7e5db7333a166.jpg?resize=1024x768",
    // RELEASE_DATE:"05/08/2024"
    console.log("this it is")
    function Thumela(){
        alert("Inkinga iku Brawuza,usalungiswa")
    }
    return (
        <>
            <form action="" className="form">
                    <input style={{width:"350px"}} type="text" name="" id="" placeholder="AuthersName" />
                    <div style={{display:"flex"}}>
                        
                        <input style={{marginLeft:"60px",width:"220px"}} type="text" name="" id="" placeholder="Tittle" />
                        <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="" id=" " placeholder="ReleaseDate" />
                    </div>
                    <div>
                        <input style={{width:"350px"}} type="text" name="" id="" placeholder="AuthersName" />

                    </div>
                    <div>
                            <input style={{marginLeft:"20px",width:"220px"}} type="text" name="" id="" placeholder="formet" />
                            <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="" id="" placeholder="numb" />
                    </div>
                     <button style={{height:"30px",width:"70px",borderRadius:"10px",backgroundColor:"lightgreen"}} onClick={Thumela}>submit</button>
            </form>
        </>
    )
}export default Register