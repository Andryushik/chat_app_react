import { useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/GlobalState';

export const useSignInGoogle = () => {
  const { auth } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const signIn = () => signInWithPopup(auth, provider);
  return signIn;
};
