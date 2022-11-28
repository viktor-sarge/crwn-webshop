import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { resolvePath } from 'react-router-dom';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	useEffect(() => {
		async function getResult() {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(
					response.user
				);
			}
		}
		getResult();
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<div>Sign in page</div>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
