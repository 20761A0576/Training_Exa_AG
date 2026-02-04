import React from "react";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./Context/ThemeContext/ThemeContext";
import { CartProvider } from "./Context/CartContext";

const App = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <CartProvider>
                    <AppRoutes />
                </CartProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App;