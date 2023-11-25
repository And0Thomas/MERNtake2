import NaviP from "../components/NaviP"
import ContactP from "../components/ContactP"

function ContactPs() {
    var ID = Number(localStorage.getItem("ID", 1));
    if(ID !== 1)
    {
        window.location.href = '/';
    }
    else{
  return(
    <div>
      <NaviP/>
      <ContactP/>
    </div>
  )
    }
}

export default ContactPs