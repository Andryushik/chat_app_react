import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../utils/firebase';

describe('Chat page', () => {
  jest.setTimeout(10000);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  afterEach(async () => {
    await auth.signOut();
  });

  it('if User not signed in user should be null', async () => {
    expect(auth.currentUser).toBe(null);
  });
});
