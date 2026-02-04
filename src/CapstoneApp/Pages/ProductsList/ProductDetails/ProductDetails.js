import React, { useEffect, useState } from "react";
import { Products } from "../../../Data/Products";
import { useNavigate, useParams } from "react-router-dom";
import { Container, NoItems, ProductInfo, ProductImage, Title, Description, Features, Price, Button, ButtonContainer, RemoveCartButton, BackButton } from "./ProductDetails.Styled";
import { useCart } from "../../../Context/CartContext";
import { useAuth } from "../../../Context/AuthContext";

const ProductDetails = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const product = Products.find((p) => p.id === id);
    const { state, dispatch } = useCart();
    const [cart, setCart] = useState(true);

    useEffect(() => {
        const isExist = state.items.filter((item) => item.username == user.username).find((item) => item.id === product.id);
        setCart(!isExist);
    }, []);

    const handleAddToCart = () => {
        if (cart) {
            dispatch({ type: "ADD_TO_CART", payload: { ...product, username: user.username } });
            setCart(false);
        } else {
            navigate("/cartItems");
        }
    };

    const handleRemoveCart = () => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id:product.id, username: user.username } });
        setCart(true);
    }

    if (!product) return <NoItems>Product not found!</NoItems>;

    return (
        <Container>
            <ProductImage src={"https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg"} alt={product.name} />
            <ProductInfo>
                <Title>{product.name}</Title>
                <Description>{product.description}</Description>
                <Features dangerouslySetInnerHTML={{ __html: product.features }} />
                <Price>${product.price}</Price>
                <ButtonContainer>
                    <Button onClick={handleAddToCart} cart={cart} >
                        {
                            cart ? "Add to Cart" : "Go To Cart"
                        }
                    </Button>
                    {
                        !cart && <RemoveCartButton onClick={handleRemoveCart} > Remove From Cart</RemoveCartButton>
                    }
                </ButtonContainer>
                <BackButton onClick={() => navigate("/products")} >Back</BackButton>
            </ProductInfo>
        </Container>
    );
};

export default ProductDetails;
