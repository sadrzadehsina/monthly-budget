import React, { useState, createContext } from 'react';
import * as auth from '@Lib/firebase/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

	const [verifier, setVerifier] = useState();

	const login = phoneNumber => {
		
		return auth.login(phoneNumber).then(setVerifier);

	};

	const confirm = code => {

		return auth.confirm(verifier, code);

	};

	return (
		<AuthContext.Provider value={{ login, confirm }}>
			{children}
		</AuthContext.Provider>
	)

};