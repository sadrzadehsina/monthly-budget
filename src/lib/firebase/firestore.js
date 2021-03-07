import firestore from '@react-native-firebase/firestore';

const _firestore = firestore();

const getCollection = name => _firestore.collection(name).get();

export {
	getCollection,
};
