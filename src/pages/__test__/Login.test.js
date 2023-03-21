import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe('Login page', () => {
  it('Renders LOGIN page', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Login />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('Goes to the LOGIN page if the url is not recognized and user auth', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Login />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  // it('renders chat name homepage link', () => {
  //   render(<Chat />);
  //   const linkElement = screen.getByText(/HYF Chat App/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
  // it('Displays li item', () => {
  //   render(<Chat />);
  //   expect(screen.getAllByRole('link')).toEqual(3);
  // });
});
