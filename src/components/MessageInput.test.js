import { render, screen, fireEvent } from '@testing-library/react';
import MessageInput from './MessageInput';

describe('MessageInput', () => {
  it('renders input', () => {
    render(<MessageInput />);
    const inputElement = screen.getByTestId('message-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders Send button', () => {
    render(<MessageInput />);
    const buttonElement = screen.getByRole('button', { name: /send/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('displays alert if message is empty', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MessageInput />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(alert).toHaveBeenCalledWith('Please enter a message');
    alert.mockRestore();
  });
});
