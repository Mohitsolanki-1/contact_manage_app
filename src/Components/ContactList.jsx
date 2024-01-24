import "../App.css"
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props){

    const {contact, removeContact} = props
            
    const ContactList = contact.map((val)=>{
        return(

            <div>
            <div className="name"> {val.data.name} </div>
            <div className="email"> {val.data.email} </div>
            <span onClick={()=>removeContact(val.id)} ><DeleteIcon/></span>
            

            </div>
        )
    })

return(
   <>
    <div className="contact_list">ContactList</div>

    <div className="ContactList">{ContactList}</div>
      </>
)

}

export default ContactList;