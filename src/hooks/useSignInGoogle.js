import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthContext } from '../context/GlobalState';

export const useSignInGoogle = () => {
  const { auth } = useAuthContext();
  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };
  return signIn;
};
