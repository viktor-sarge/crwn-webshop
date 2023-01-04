import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={`cart-${item.id}`} cartItem={item} />
				))}
			</div>

			<Link className="checkout" to="/checkout">
				<Button>Go to checkout</Button>
			</Link>
		</div>
	);
};

export default CartDropdown;
