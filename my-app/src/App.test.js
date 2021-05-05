import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn testing link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn testing/i);
  expect(linkElement).toBeInTheDocument();
});

test('should have correct url', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn testing/i);
  expect(linkElement.href).toContain('ultimateqa.com')
})
