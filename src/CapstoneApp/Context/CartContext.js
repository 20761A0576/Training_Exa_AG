import { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext(null);
const storedCart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  items: storedCart || []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action?.payload]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(i => (i.id !== action?.payload?.id || i.username !== action?.payload?.username))
      };

    case "ORDER_PLACED_SUCCESSFULL":
      return {
        ...state,
        items: state.items.filter(i => (i.username !== action?.payload))
      };

    default:
      return state;
  }
}


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (state.items) {
      localStorage.setItem("cart", JSON.stringify(state.items));
    } else {
      localStorage.removeItem("cart");
    }
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
