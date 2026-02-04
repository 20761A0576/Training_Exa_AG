import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
    Container,
    Header,
    Title,
    Nav,
    OrderList,
    List,
    Main,
    Footer,
    ActionButton
} from "./Layout.Styled";
import { useTheme } from "../../Context/ThemeContext/ThemeContext";
import { useAuth } from "../../Context/AuthContext";

const Layout = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT",payload: null });
        navigate("/login");
    };

    return (
        <Container>
            <Header>
                <Title>Product Explorer</Title>
                <Nav>
                    <OrderList>
                        <List>
                            <Link to="/">Home</Link>
                        </List>

                        <List>
                            <Link to="/products">Products</Link>
                        </List>

                        <List>
                            <Link to="/about">About</Link>
                        </List>

                        <List>
                            <Link to="/contact">Contact</Link>
                        </List>

                        <List>
                            <Link to="/cartItems">Cart</Link>
                        </List>

                        <List>
                            <ActionButton onClick={handleLogout}>
                                Logout
                            </ActionButton>
                        </List>
                        <List>
                            <ActionButton onClick={toggleTheme}>
                                {theme === "dark" ? "🌙" : "☀️"}
                            </ActionButton>
                        </List>
                    </OrderList>
                </Nav>
            </Header>

            <Main>
                <Outlet />
            </Main>

            <Footer>
                © {new Date().getFullYear()} Capstone. All rights reserved.
            </Footer>
        </Container>
    );
};

export default Layout;
