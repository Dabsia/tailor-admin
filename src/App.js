import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Create from "./page/Create/Create";
import AllProducts from "./page/AllProducts/AllProducts";
import Orders from "./page/Orders/Orders";
// import Products from "./page/Products/Products";

function App() {
  return (
    <div className="w-full flex justify-center">
      <div className=" h-screen max-w-[1500px] flex  w-full">
        <Header />
        <div className="p-10 w-[85%] ">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/orders" element={<Orders />} />
            {/* <Route path="/products" element={<Products />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
