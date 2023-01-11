import {
	DirectoryItemContainer,
	BackgroundImage,
	DirectoryItemBody,
} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ id, imageUrl, title, route }) => {
	const navigate = useNavigate();

	const onNavigationHandler = () => navigate(route);
	return (
		<DirectoryItemContainer key={id} onClick={onNavigationHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<DirectoryItemBody>
				<h2>{title.toUpperCase()}</h2>
				<p>Shop now</p>
			</DirectoryItemBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
