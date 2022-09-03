import {createContext, useEffect, useState} from "react";

const addCardItem = (cartItems, productToAdd) => {
    //find if the cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    // If found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    // return new array with modify cartItems / new cartItems
    return [...cartItems, { ...productToAdd, quantity: 1}];
}

const removeCartItem = ( cartItems, cartItemsToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemsToRemove.id
    );

    // check if quantity is equal to 1, if it is remove item from the cart (filter methode)
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id);
    }

    // return cartItems with matching cart item with reduce quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemsToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }


}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};