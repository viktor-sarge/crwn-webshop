import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

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
