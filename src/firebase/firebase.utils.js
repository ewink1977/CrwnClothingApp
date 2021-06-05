import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBjZW6Q4bsDN3u_fjGHNpaBQENHgWOzIQE',
	authDomain: 'crwn-v2.firebaseapp.com',
	projectId: 'crwn-v2',
	storageBucket: 'crwn-v2.appspot.com',
	messagingSenderId: '180051222795',
	appId: '1:180051222795:web:12fad8956e71b44827820e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;