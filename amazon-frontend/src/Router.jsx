import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./assets/pages/Landing/Landing"
import Signup from "./assets/pages/Auth/Signup"
import Payment from './assets/pages/Payment/Payment'
import Orders from './assets/pages/Orders/Orders'
import Cart from './assets/pages/Cart/Cart'


export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}
