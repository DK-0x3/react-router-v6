import { useNavigate } from 'react-router-dom';
import { useTypedLocation } from '../../../features/hooks/useTypedLocation.ts';
import { Location } from 'react-router';
import { useAuth } from '../../../features/hoc/AuthProvider.tsx';
import { FormEvent } from 'react';
import { IUser } from '../../../entities/models/user/IUser.ts';

export interface ILocationState {
    from: Location;
}

const LoginPage = () => {
	const navigate = useNavigate();
	const location = useTypedLocation<ILocationState | null>();
	const { signIn } = useAuth();

	const fromPage = location?.state?.from?.pathname || '/';

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const username = formData.get('username') as string;

		if (!username) return;

		const user: IUser = {
			name: username,
		};

		signIn(user, () => {
			navigate(fromPage, { replace: true });
		});
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name: <input name="username" required />
				</label>
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
};

export default LoginPage;