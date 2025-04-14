import { ReactNode, createContext, useState, useContext } from 'react';
import { IUser } from '../../entities/models/user/IUser.ts';

// Тип контекста
type AuthContextType = {
    user: IUser | null;
    signIn: (newUser: IUser, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;
};

const authContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) throw new Error('useAuth must be used within an AuthProvider');
	return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<IUser | null>(null);

	const signIn = (newUser: IUser, callback: VoidFunction) => {
		setUser(newUser);
		callback();
	};

	const signOut = (callback: VoidFunction) => {
		setUser(null);
		callback();
	};

	return (
		<authContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</authContext.Provider>
	);
};
