import "../App.css"
import { useState } from "react";

function AddContact({addContact}){
      
    const [contactData, setContactData] = useState({name:"",email:""});

    const handleChange = (e) =>{

        if(e.target.name === "name"){
            setContactData({...contactData, name:e.target.value})
        }

        else{
            setContactData({...contactData, email:e.target.value})
        }
    }

    const handleAdd = () =>{
        if (contactData.name === "" || contactData.email ===""){

            alert("please fill all the details")
            return
        }
        addContact(contactData)
        setContactData({name: "", email: ""})
    }
    
    return (
     <div className="formHeader">
     <div className="add-contact">AddContact</div>

     <form>
           <lable className="name_1">Name:</lable><br/>
           <input type="text"placeholder="enter name"  name="name" value={contactData.name} onChange={handleChange}/><br/>

           <lable className="email_1" for='email'>Email:</lable><br/>
           <input type="email" id="email" placeholder="enter Email"  name="email" value={contactData.email} onChange={handleChange}/>
     </form>
        <button className="btn" onClick={handleAdd}>AddContact</button>
     </div>  


    )


}

export default AddContact;