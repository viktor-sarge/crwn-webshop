import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { AuthenticationContainer } from './authentication.styles';
import { resolvePath } from 'react-router-dom';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
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

	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
