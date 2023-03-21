import { MemoryRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import { GlobalProvider } from '../context/GlobalState';
import Chat from './Chat';
// import { useSignInGoogle } from '../../hooks/useSignInGoogle';

describe('Chat page', () => {
  // const signIn = useSignInGoogle();

  // beforeEach(async () => {
  //   await signIn();
  // });

  it('Renders CHAT page', async () => {
    // await act(async () => await signIn());
    render(
      <GlobalProvider>
        <MemoryRouter initialEntries={['/chat']}>
          <Chat />
        </MemoryRouter>
      </GlobalProvider>,
    );
    expect(await screen.findByTestId('chat-page')).toBeInTheDocument();
  });

  it('Displays list items', async () => {
    // await act(async () => await signIn());
    render(
      <GlobalProvider>
        <MemoryRouter initialEntries={['/chat']}>
          <Chat />
        </MemoryRouter>
      </GlobalProvider>,
    );
    expect(typeof (await screen.findAllByRole('list'))).toBe('object');
  });

  it('Goes to the chat page if the url is not recognized', async () => {
    // await act(async () => await signIn());
    const badRoute = '/some/bad/route';
    render(
      <GlobalProvider>
        <MemoryRouter initialEntries={[badRoute]}>
          <Chat />
        </MemoryRouter>
      </GlobalProvider>,
    );
    expect(await screen.findByTestId('chat-page')).toBeInTheDocument();
  });
});
