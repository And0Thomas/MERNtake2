import Hero from "../components/Hero"
import NaviP from "../components/NaviP"
import Contact from "../components/Contact"

function Home() {
    var ID = Number(localStorage.getItem("ID", 1));
    if(ID !== 1)
    {
        window.location.href = '/';
    }
  return(
    <div>
      <NaviP/>
      <Hero/>
      <Contact/>
    </div>
  )
}

export default Home