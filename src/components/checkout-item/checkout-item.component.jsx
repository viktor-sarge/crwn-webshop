import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ item }) => {
	const { cartItemDecrease, addItemToCart, deleteItems } =
		useContext(CartContext);
	const { name, quantity, price, imageUrl, id } = item;

	const increaseQuantity = () => addItemToCart(item);
	const decreaseQuantity = () => cartItemDecrease(id);
	const clearItems = () => deleteItems(id);
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<span className="arrow" onClick={decreaseQuantity}>
					&#10094;
				</span>
				<span className="value">{quantity}</span>
				<span className="arrow" onClick={increaseQuantity}>
					&#10095;
				</span>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={clearItems}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
