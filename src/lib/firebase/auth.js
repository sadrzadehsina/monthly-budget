import auth from '@react-native-firebase/auth';

const _auth = auth();

const login = phoneNumber => _auth.signInWithPhoneNumber(phoneNumber);

const onAuthStateChanged = callback => _auth.onAuthStateChanged(callback);

const confirm = (verifier, code) => verifier.confirm(code);

export {
	login,
	confirm,
	onAuthStateChanged,
};