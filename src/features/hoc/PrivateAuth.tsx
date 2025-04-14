import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from './AuthProvider.tsx';
import ROUTES from '../../app/routers/Routes.ts';
import { ResolveRoutePath } from '../helpers/ResolveRoutePath.ts';

interface IPrivateAuthProps {
    children: ReactNode;
}

const PrivateAuth = (props: IPrivateAuthProps) => {
	const { children } = props;
	const location = useLocation();
	const auth = useAuth();

	if (auth.user === null) {
		return <Navigate to={ResolveRoutePath(ROUTES.LOGIN, location.pathname)} state={{ from: location }} replace />;
	}

	return (
		children
	);
};

export default PrivateAuth;