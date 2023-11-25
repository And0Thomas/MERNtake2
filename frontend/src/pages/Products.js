import NaviP from "../components/NaviP"
import ProductPage from "../components/ProductPage"

function Products() {
  var ID = Number(localStorage.getItem("ID", 1));
    if(ID !== 1)
    {
        window.location.href = '/';
    }
  return(
    <div>
      <NaviP />
      <ProductPage />
    </div>
  )
}

export default Products