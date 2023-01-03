import { createContext, useState, useEffect } from 'react';

// Helper function to update the cart content object
const addCartItem = (cartItems, productToAdd) => {
	const existingCartItems = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItems) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Context for the cart
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartItemCount: 0,
});

// Provider for the cart
export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemCount, setCartItemCount] = useState(0);
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	useEffect(() => {
		setCartItemCount(
			cartItems.reduce((total, current) => total + current.quantity, 0)
		);
	}, [cartItems]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		setCartItems,
		addItemToCart,
		cartItemCount,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
