

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

import MyOrderPage from "./pages/MyOrderPage.jsx"
import CheckoutPage from "./pages/CheckoutPage.jsx"
import ViewProduct from "./components/ViewProduct.jsx"
import BuyNowPage from "./pages/BuyNowPage.jsx"

import VerifyEmailPage from "./pages/VerifyEmailPage.jsx"
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage.jsx"
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage.jsx"

import DashboardAnalysis from "./pages/seller-dashboard/DashboardAnalysis.jsx"

// Seller Dashboard Subpages
import AddProduct from "./pages/seller-dashboard/AddProduct.jsx"
import UpdateProduct from "./pages/seller-dashboard/UpdateProduct.jsx"
import DeleteProduct from "./pages/seller-dashboard/DeleteProduct.jsx"
import NewOrders from "./pages/seller-dashboard/NewOrder.jsx"
import CancelledOrders from "./pages/seller-dashboard/CancelledOrders.jsx"
import MyProducts from "./pages/seller-dashboard/MyProducts.jsx"
import ConfirmedOrders from "./pages/seller-dashboard/ConfirmedOrders.jsx"
import ShippedOrders from "./pages/seller-dashboard/ShippedOrders.jsx"
import DeliveredOrders from "./pages/seller-dashboard/DeliveredOrders.jsx"

function App() {

  return (
    <>
      <Toaster />

      <BrowserRouter>
        <Routes>

          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Category wise Routes */}
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/electronics" element={<Electronics />} />

          {/* Seller Page Route */}
          <Route path="/seller-page" element={<SellerPage />} />

          {/* Auth Routes */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginInPage />} />
          <Route path="/logout" element={<LoginInPage />} />

          {/* Cart/Orders Route */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<MyOrderPage />} />

          {/* Verify-email-token Route */}
          <Route path="/verify-email/:token" element={<VerifyEmailPage />} />

          {/* Forget/Reset password Route */}
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/reset-password/:resetToken" element={<ResetPasswordPage />} />

          {/* Product Search Route */}
          <Route path="/search" element={<ProductResultPage />} />

          {/* Checkout Route */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Product Info Route */}
          <Route path="/product/:id" element={<ViewProduct />} />

          {/* Product Buy now Route */}
          <Route path="/buy-now/:productId" element={<BuyNowPage />} />

          {/* Seller Dashboard */}
          <Route path="/seller-dashboard" element={<SellerDashboardPage />}>

            <Route path="dashboard" element={<DashboardAnalysis />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="update-product" element={<UpdateProduct />} />
            <Route path="delete-product" element={<DeleteProduct />} />
            <Route path="new-orders" element={<NewOrders />} />
            <Route path="confirmed-orders" element={<ConfirmedOrders />} />
            <Route path="shipped-orders" element={<ShippedOrders />} />
            <Route path="delivered-orders" element={<DeliveredOrders />} />
            <Route path="cancelled-orders" element={<CancelledOrders />} />
            <Route path="my-products" element={<MyProducts />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
