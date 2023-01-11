import { CartItemContainer, Img, ItemDetails, Name } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;
	return (
		<CartItemContainer>
			<Img src={imageUrl} alt={name} />
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity} x {price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
