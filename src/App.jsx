import "./App.css";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import { ContextDataFunc } from "./components/ProductContext";
import Home from "./components/Home";

function App() {
  return (
    <ContextDataFunc>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="detail/:id" element={<Detail />} />   
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Default />} />
          </Route>
        </Routes>
      </div>
    </ContextDataFunc>
  );
}

export default App;
