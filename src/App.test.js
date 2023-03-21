import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App routes', () => {
  it('Goes to the HOME page on /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('Goes to the LOGIN page if the url is not recognized', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  // it('Goes to the CHAT page if the url is not recognized and user auth', () => {
  //   const badRoute = '/some/bad/route';
  //   render(
  //     <MemoryRouter initialEntries={[badRoute]}>
  //       <App />
  //     </MemoryRouter>,
  //   );
  //   expect(screen.getByTestId('chat-page')).toBeInTheDocument();
  // });

  it('Goes to the LOGIN page on /login', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('Goes to the LOGIN page on /chat if user not auth', async () => {
    render(
      <MemoryRouter initialEntries={['/chat']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  // it('Goes to the CHAT page on /chat if user auth', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/chat']}>
  //       <App />
  //     </MemoryRouter>,
  //   );
  //   expect(screen.getByTestId('chat-page')).toBeInTheDocument();
  // });
});
