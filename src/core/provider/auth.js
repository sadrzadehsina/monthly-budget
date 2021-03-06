import React, { useState, createContext } from 'react';
import * as auth from '@Lib/firebase/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

	const [verifier, setVerifier] = useState();

	const login = phoneNumber => auth.login(phoneNumber).then(setVerifier);

	const confirm = code => auth.confirm(verifier, code);

	const onAuthStateChanged = callback => auth.onAuthStateChanged(callback);

	return (
		<AuthContext.Provider value={{ login, confirm, onAuthStateChanged }}>
			{children}
		</AuthContext.Provider>
	)

};