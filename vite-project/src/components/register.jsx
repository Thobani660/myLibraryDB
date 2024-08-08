
import React, { useState } from 'react';
import {addBook} from "./createBook"
// import addBook from "./addBook"

function Register() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    edition: '',
    numberOfPages: '',
    coverDesign: '',
    releaseDate: '',
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event){
    event.preventDefault();
    addBook(formData);
    alert("Inkinga iku Brawuza,usalungiswa");
    window.location.reload(true)
  };

  return (
    <>
     
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="MainDiv">
            <input style={{width:"350px"}} type="text" name="author" id="" placeholder="AuthersName"   onChange={handleChange} />
            <div style={{display:"flex"}}>
                <input style={{marginLeft:"60px",width:"220px"}} type="text" name="title" id="" placeholder="Title"  onChange={handleChange} />
                <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="releaseDate" id=" " placeholder="ReleaseDate" onChange={handleChange} />
            </div>
            <div>
                <input style={{width:"350px"}} type="text" name="edition" id=""  placeholder="r" onChange={handleChange} />
            </div>
            <div>
                <input style={{marginLeft:"20px",width:"220px"}} type="text" name="numberOfPages" id="" placeholder="ISBN"  onChange={handleChange} />
                <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="pages" id="" placeholder="Pages"  onChange={handleChange} />
            </div>
            <div>
                <input style={{width:"350px"}} type="text" name="coverDesign" id="" placeholder="CoverDesign"  onChange={handleChange} />
            </div>
            <div>
                <input style={{marginLeft:"20px",width:"220px"}} type="text" name="numPages" id="" placeholder="Nuumber of pages"  onChange={handleChange} />
                <input style={{width:"70px" ,borderRadius:"20px",marginLeft:"50px"}} type="text" name="price" id="" placeholder="price"  onChange={handleChange} />
            </div>

            <button style={{height:"40px",width:"90px",borderRadius:"10px",backgroundColor:"lightgreen"}} type="submit">submit</button>
        </div>
      </form>
    </>
  )
}

export default Register;