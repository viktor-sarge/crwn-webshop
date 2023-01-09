import './directory-item.styles.scss';

const DirectoryItem = ({ id, imageUrl, title }) => {
	return (
		<div key={id} className="directory-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="directory-item-body ">
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
