import NaviP from "../components/NaviP"
import Cart from "../components/CartPage"

function CartPage() {
  var ID = Number(localStorage.getItem("ID", 1));
    if(ID !== 1)
    {
        window.location.href = '/';
    }
  return(
    <div>
      <NaviP />
      <Cart />
    </div>
  )
}

export default CartPage