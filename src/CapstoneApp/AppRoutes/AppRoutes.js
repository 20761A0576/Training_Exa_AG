import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import Products from "../Pages/ProductsList/ProductsList";
import ProductDetails from "../Pages/ProductsList/ProductDetails/ProductDetails";
import CartItems from "../Pages/ProductsList/CartItems/CartItems";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cartItems" element={<CartItems />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
