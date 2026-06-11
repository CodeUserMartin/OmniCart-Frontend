

import { Toaster } from "react-hot-toast"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Clothing from "./pages/Clothing.jsx"
import Groceries from "./pages/Groceries.jsx"
import Electronics from "./pages/Electronic.jsx"
import CartPage from "./pages/CartPage.jsx"
import ProductResultPage from "./pages/ProductResultPage.jsx"
import SellerPage from "./pages/SellerPage.jsx"
import SellerDashboardPage from "./pages/SellerDashboardPage.jsx"
import SignUpPage from "./pages/Auth/SignUpPage.jsx"
import LoginInPage from "./pages/Auth/LoginInPage.jsx"

// Seller Dashboard Subpages
import AddProduct from "./pages/seller-dashboard/AddProduct.jsx"
import UpdateProduct from "./pages/seller-dashboard/UpdateProduct.jsx"
import DeleteProduct from "./pages/seller-dashboard/DeleteProduct.jsx"
import NewOrders from "./pages/seller-dashboard/NewOrder.jsx"
import CancelledOrders from "./pages/seller-dashboard/CancelledOrders.jsx"
import MyProducts from "./pages/seller-dashboard/MyProducts.jsx"
import ReStockProducts from "./pages/seller-dashboard/ReStockProducts.jsx"

function App() {

  return (
    <>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginInPage />} />
          <Route path="/logout" element={<LoginInPage />} />

          <Route path="/notifications" element={<ProductResultPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/seller-dashboard" element={<SellerDashboardPage />}>

            <Route path="add-product" element={<AddProduct />} />
            <Route path="update-product" element={<UpdateProduct />} />
            <Route path="delete-product" element={<DeleteProduct />} />
            <Route path="new-orders" element={<NewOrders />} />
            <Route path="cancelled-orders" element={<CancelledOrders />} />
            <Route path="my-products" element={<MyProducts />} />
            <Route path="re-stock-products" element={<ReStockProducts />} />

          </Route>

          <Route path="/clothing" element={<Clothing />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
