import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList.js"

function App() {
  const productList = [
    {
      price: 99999,
      name: "iphone 15",
      quantity: 0,
    },
    {
      price: 79999,
      name: "iphone 14",
      quantity: 0,
    }
  ]
  return (
    <>
      <Navbar />
      <ProductList productList={productList}/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
