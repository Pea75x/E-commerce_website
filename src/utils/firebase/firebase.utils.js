import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDwYKugaAXfoMXUwKi6op5i90Rreq1Ah3I',
  authDomain: 'ecommerce-app-pea75x.firebaseapp.com',
  projectId: 'ecommerce-app-pea75x',
  storageBucket: 'ecommerce-app-pea75x.appspot.com',
  messagingSenderId: '764562308151',
  appId: '1:764562308151:web:3340a3ff8d93010f7bd3b2'
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log('user snapshot', userSnapshot);
  console.log(userSnapshot.exists());
  // check to see if user exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // set the user in docs
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('Error creating user -', error.message);
    }
  }
  return userDocRef;
};