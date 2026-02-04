import React, { useMemo } from "react";
import { useCart } from "../../../Context/CartContext";
import {
    CartContainer,
    NoItems,
    ProductCard,
    ProductImage,
    ProductInfo,
    SubInfo,
    ProductTitle,
    ProductDescription,
    Features,
    ProductCategory,
    ProductPrice,
    RemoveCartButton,
    PriceContainer,
    Price,
    Button
} from "./CartItems.Styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../../Context/AuthContext";

const CartItems = () => {
    const { state, dispatch } = useCart();
    const { user } = useAuth();

    const handleRemoveCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id, username: user.username } });
    }

    const handleOrder = (id) => {
        dispatch({ type: "ORDER_PLACED_SUCCESSFULL", payload: user.username });
        toast.success("Order successfully placed.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
        });
    }

    const totalPrice = useMemo(() => {
        const price = state.items.filter((item) => item.username == user.username).reduce((total, item) => {
            return total + (Number(item.price) || 0);
        }, 0);

        return `$${price.toFixed(2)}`;
    }, [state.items]);

    return (
        <>
            {
                (state.items.filter((item) => item.username == user.username).length !== 0) && <h2>Cart Items</h2>
            }
            <CartContainer>
                {
                    (state.items.filter((item) => item.username == user.username).length === 0) && <NoItems> No Cart Items Available</NoItems>
                }
                {
                    state?.items?.filter((item) => item.username == user.username).map((item, index) => (
                        <ProductCard key={index}>
                            <ProductImage src={"https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg"} alt={item.name} />
                            <ProductInfo>
                                <SubInfo>
                                    <ProductTitle>{item.name}</ProductTitle>
                                    <ProductDescription>{item.description}</ProductDescription>
                                    <Features dangerouslySetInnerHTML={{ __html: item.features }} />
                                    <ProductCategory>{item.category}</ProductCategory>
                                    <ProductPrice>${Number(item.price).toFixed(2)}</ProductPrice>
                                </SubInfo>
                                <RemoveCartButton onClick={() => handleRemoveCart(item.id)}>Remove Cart Item</RemoveCartButton>
                            </ProductInfo>
                        </ProductCard>
                    ))
                }
                {
                    (state.items.filter((item) => item.username == user.username).length !== 0) && (
                        <PriceContainer>
                            <Price>Total Price: <ProductPrice>{totalPrice}</ProductPrice></Price>
                            <Button onClick={handleOrder}>Place Order</Button>
                        </PriceContainer>
                    )
                }
            </CartContainer>
            <ToastContainer />
        </>
    )
}

export default CartItems;