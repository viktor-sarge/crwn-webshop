import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser = null;
	};
	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutHandler}>
							Log out
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
