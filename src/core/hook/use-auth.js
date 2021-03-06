import { useContext } from 'react';
import { AuthContext } from '../provider';

export const useAuth = () => {

	const auth = useContext(AuthContext);

	return {
		login: auth.login,
		confirm: auth.confirm,
		onAuthStateChanged: auth.onAuthStateChanged,
	};

};