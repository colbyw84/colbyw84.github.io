import { render, screen } from '@testing-library/react';
import App from './App';

test('renders days', () => {
  render(<App />);
  const days = screen.getByText(/days/i);
  expect(days).toBeInTheDocument();
});
