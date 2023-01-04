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

const clearItems = (idToDelete, items) =>
	items.filter((item) => item.id !== idToDelete);

// Helper function to decrease number of a certain item in cart
const decreaseItemCount = (cartItems, idToDecrease) => {
	// Does id exist in cartItems?
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === idToDecrease
	);

	if (existingItem) {
		// Map over items and decrease quantity by 1 of matching id
		const decreasedItems = cartItems.map((cartItem) =>
			cartItem.id === idToDecrease
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);

		// Remove items with a quantity lower than 1
		return decreasedItems.filter((item) => item.quantity > 0);
	}

	return cartItems; // Return unprocessed as a failsafe
};

// Context for the cart
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartItemCount: 0,
	cartItemDecrease: () => {},
	total: 0,
	deleteItems: () => {},
});

// Provider for the cart
export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemCount, setCartItemCount] = useState(0);
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	const cartItemDecrease = (idToDecrease) => {
		setCartItems(decreaseItemCount(cartItems, idToDecrease));
	};
	const [total, setTotal] = useState(0);
	const deleteItems = (id) => {
		setCartItems(clearItems(id, cartItems));
	};

	useEffect(() => {
		setCartItemCount(
			cartItems.reduce((total, current) => total + current.quantity, 0)
		);
		setTotal(
			cartItems.reduce(
				(total, current) => total + current.quantity * current.price,
				0
			)
		);
	}, [cartItems]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		setCartItems,
		addItemToCart,
		cartItemCount,
		cartItemDecrease,
		total,
		deleteItems,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
