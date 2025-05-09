import React from 'react';
import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import App from './App';

test('can receive a new user and show it on a list', () => {
  render(<App />);
  const nameInput = screen.getByRole("textbox", { name: /name/i })
  const emailInput = screen.getByRole("textbox", { name: /email/i })
  const submitButton = screen.getByRole("button")

  user.click(nameInput)
  user.keyboard("kane")

  user.click(emailInput)
  user.keyboard("kane@gmail.com")

  user.click(submitButton)

  // screen.debug()

  const name = screen.getByRole("cell", { name: "kane" })
  const email = screen.getByRole("cell", { name: "kane@gmail.com" })

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
});
