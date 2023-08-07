import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link that points to little lemon webpage', () => {
  render(<App />);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});
