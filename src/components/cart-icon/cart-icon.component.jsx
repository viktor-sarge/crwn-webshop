import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartItemCount, setCartItemCount } =
		useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartItemCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
