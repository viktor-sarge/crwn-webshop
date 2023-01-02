import { createContext, useState } from 'react';
import PRODUCT_DATA from '../shop-data.json';

export const ProductContext = createContext({
	products: [],
	setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCT_DATA);
	const value = { products };
	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
// import { createContext, useState, useEffect } from 'react';
// import {
// 	onAuthStateChangedListener,
// 	createUserDocumentFromAuth,
// } from '../utils/firebase/firebase.utils';
// export const UserContext = createContext({
// 	currentUser: null,
// 	setCurrentUser: () => null,
// });

// export const UserProvider = ({ children }) => {
// 	const [currentUser, setCurrentUser] = useState(null);
// 	const value = { currentUser, setCurrentUser };

// 	useEffect(() => {
// 		const unsubscribe = onAuthStateChangedListener((user) => {
// 			if (user) {
// 				createUserDocumentFromAuth(user);
// 			}
// 			setCurrentUser(user);
// 		});
// 		return unsubscribe;
// 	}, []);

// 	return (
// 		<UserContext.Provider value={value}>{children}</UserContext.Provider>
// 	);
// };
