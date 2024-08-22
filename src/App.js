import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { CartSection } from "./components/Carts/CartSection";
import { ManageProducts } from "./components/ManageProducts/ManageProducts";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  const [role, setRole] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to right top, #f0f3f7, #b9e8fc, #69e0eb, #00d5ba, #2cc46f)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BrowserRouter>
        <Navbar role={role} setRole={setRole} />
        <div className="flex-grow">
          <Routes>
            {!role && (
              <>
                <Route path="/" element={<ProductList role={role}/>} />
                <Route path="/cart" element={<CartSection />} />
              </>
            )}

            {role && (
              <>
                <Route path="/" element={<ProductList role={role}/>} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/manage-product" element={<ManageProducts />} />
              </>
            )}

            <Route
              path="*"
              element={
                <h1 className="text-2xl text-center font-bold my-5">
                  We Cannot Recognize You, Please Login !!!
                </h1>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
