import { DirectoryContainer } from './directory.styles';
import CategoryItem from '../directory-item/directory-item.component';

const Categories = ({ categories }) => {
	return (
		<DirectoryContainer>
			{categories.map(({ title, id, imageUrl }) => {
				return (
					<CategoryItem key={id} title={title} imageUrl={imageUrl} />
				);
			})}
		</DirectoryContainer>
	);
};

export default Categories;
