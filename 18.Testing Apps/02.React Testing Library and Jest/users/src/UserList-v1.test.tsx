import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
    const users = [
        { name: "john", email: "john@gmail.com" },
        { name: "jane", email: 'jane@gmail.com' }
    ]

    // Render the component
    render(<UserList users={users} />)

    return { users }
}

test("render empty row indicator", () => {
    // Render the component
    render(< UserList users={[]} />)

    // Find all the rows in the table
    const rows = within(screen.getByTestId("user-list")).getAllByRole("row")

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(1)
})
test("render one row per user", () => {

    renderComponent()

    // Find all the rows in the table
    // screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId("user-list")).getAllByRole("row")

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
})

test("render the email and name of each user", () => {
    const { users } = renderComponent()

    users.forEach(user => {
        const name = screen.getByRole("cell", { name: user.name })
        const email = screen.getByRole("cell", { name: user.email })
        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    })
})