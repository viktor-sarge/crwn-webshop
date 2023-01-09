import './directory.styles.scss';
import CategoryItem from '../directory-item/directory-item.component';

const Categories = ({ categories }) => {
	return (
		<div className="directory-container">
			{categories.map(({ title, id, imageUrl }) => {
				return (
					<CategoryItem key={id} title={title} imageUrl={imageUrl} />
				);
			})}
		</div>
	);
};

export default Categories;
