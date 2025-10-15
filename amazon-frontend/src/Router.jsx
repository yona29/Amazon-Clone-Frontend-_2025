import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./assets/pages/Landing/Landing";
import Auth from "./assets/pages/Auth/Auth";
import Payment from "./assets/pages/Payment/Payment";
import Orders from "./assets/pages/Orders/Orders";
import Cart from "./assets/pages/Cart/Cart";
import Results from "./assets/pages/Results/Results";
import ProductDetail from "./assets/pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./assets/Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51QCNCjC26eU7fUt3AxPGp3Z8fTX1TYoNAEVTipi9yrm2kL8QCMpWw7MaA8kUVkyI7U8Wu2KDcAKQFX77OHhhi9i900zoEKUkYk"
);
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to see your orders"}
              redirect={"/payments"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
