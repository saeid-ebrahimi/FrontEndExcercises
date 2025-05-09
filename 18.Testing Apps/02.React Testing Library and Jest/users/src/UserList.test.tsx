import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render empty row indicator", () => {
    // Render the component
    const { container } = render(< UserList users={[]} />)

    // Find all the rows in the table
    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody > tr")

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(1)
})
test("render one row per user", () => {
    const users = [
        { name: "john", email: "john@gmail.com" },
        { name: "jane", email: 'jane@gmail.com' }
    ]

    // Render the component
    const { container } = render(<UserList users={users} />)

    // Find all the rows in the table
    // screen.logTestingPlaygroundURL();
    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody > tr")

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
})

test("render the email and name of each user", () => {
    // Render the component

    // ... 

    // Assertion: ...
})