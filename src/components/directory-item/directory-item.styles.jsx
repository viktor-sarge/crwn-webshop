import styled from 'styled-components';

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	border-radius: 1em;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const DirectoryItemBody = styled.div`
	margin-top: 1em;
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 3px solid white;
	background-color: #ee4e34;
	opacity: 0.98;
	position: absolute;
	color: white;
	border-radius: 1ex;

	h2 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 22px;
		color: white;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
		margin: 0;
	}
`;

export const DirectoryItemContainer = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 7.5px 15px;
	overflow: hidden;
	border-radius: 1em;

	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			transform: scale(1.03);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
			opacity: 0.9;
		}

		& .directory-item-container {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;
