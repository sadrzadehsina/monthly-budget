import auth from '@react-native-firebase/auth';


/*
	Example:

		signInWithPhoneNumber('+989133235460')
			.then(verifier => setVerifier(verifier))

		a few line later ...

		verifier.confirm('123456')

*/
const login = phoneNumber => auth().signInWithPhoneNumber(phoneNumber);

const confirm = (verifier, code) => verifier.confirm(code);

export {
	login,
	confirm,
};