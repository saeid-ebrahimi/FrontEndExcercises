import {
  screen,
  render,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import { User } from "./App";

test("it shows to inputs and a button", () => {
  // render the component
  render(<UserForm onAddUser={jest.fn()} />);
  // manipulate the component or find an element in it.
  const inputs = screen.getAllByRole("textbox")
  const button = screen.getByRole("button")
  // Assertion - make sure the component is doing what we expect it to do.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});


test("it calls onUserAdd when the form is submitted", () => {
  // better implementation
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onAddUser={mock} />)

  // find the two inputs
  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByRole("textbox", { name: /email/i })

  // simulate typing in a name
  user.click(nameInput)
  user.keyboard("John")

  // simulate typing in an email
  user.click(emailInput)
  user.keyboard("john@gmail.com")

  // Find the Button
  const button = screen.getByRole("button")

  // Simulate clicking the button
  user.click(button)

  // Assertion to make sure 'onUserAdd' gets called with email and name
  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledWith({ name: "John", email: "john@gmail.com" })

})