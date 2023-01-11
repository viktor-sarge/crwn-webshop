import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={`cart-${item.id}`} cartItem={item} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>

			<Link className="checkout" to="/checkout">
				<Button>Go to checkout</Button>
			</Link>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
