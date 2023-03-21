import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Chat from '../Chat';

describe('Chat page', () => {
  it('Renders CHAT page', async () => {
    render(
      <BrowserRouter>
        <Chat />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('chat-page')).toBeInTheDocument();
  });

  // it('Displays li item', () => {
  //   render(<Chat />);
  //   expect(screen.getAllByRole('link')).toEqual(3);
  // });

  // it('Goes to the chat page if the url is not recognized', () => {
  //   const badRoute = '/some/bad/route';
  //   render(
  //     <MemoryRouter initialEntries={[badRoute]}>
  //       <Chat />
  //     </MemoryRouter>,
  //   );
  //   expect(screen.getByTestId('chat-page')).toBeInTheDocument();
  // });

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
