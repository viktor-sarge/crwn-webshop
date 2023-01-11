import { useState } from 'react';
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import {
	SignUpContainer,
	Headline,
	ButtonsContainer,
} from './sign-in-form.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Wrong password');
					break;
				case 'auth/user-not-found':
					alert('Unknown user');
					break;
				default:
					console.log(error);
			}
		}
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<SignUpContainer>
			<Headline>Already have an account?</Headline>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="E-mail"
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
					required
				/>
				<ButtonsContainer>
					<Button type="submit">Sign in</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google sign in
					</Button>
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignInForm;
