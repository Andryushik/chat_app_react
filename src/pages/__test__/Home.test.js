import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('UserListItem', () => {
  it('renders home page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders h1 Chat application', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const headerElement = screen.getByText(/chat application/i);
    expect(headerElement).toBeInTheDocument();
  });
});
