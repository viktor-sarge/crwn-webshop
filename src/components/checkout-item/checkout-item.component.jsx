import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	Value,
	Arrow,
	Price,
	RemoveButton,
} from './checkout-item.styles';
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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={increaseQuantity}>&#10095;</Arrow>
			</Quantity>
			<Price>${price}</Price>
			<RemoveButton onClick={clearItems}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
