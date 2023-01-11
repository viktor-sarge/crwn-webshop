import {
	DirectoryItemContainer,
	BackgroundImage,
	DirectoryItemBody,
} from './directory-item.styles';

const DirectoryItem = ({ id, imageUrl, title }) => {
	return (
		<DirectoryItemContainer key={id}>
			<BackgroundImage imageUrl={imageUrl} />
			<DirectoryItemBody>
				<h2>{title.toUpperCase()}</h2>
				<p>Shop now</p>
			</DirectoryItemBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
