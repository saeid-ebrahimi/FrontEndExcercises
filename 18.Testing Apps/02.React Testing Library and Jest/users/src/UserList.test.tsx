import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
    const users = [
        { name: "john", email: "john@gmail.com" },
        { name: "jane", email: 'jane@gmail.com' }
    ]

    // Render the component
    const { container } = render(<UserList users={users} />)

    return { users, container }
}

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

    const { container } = renderComponent()
    // Find all the rows in the table
    // screen.logTestingPlaygroundURL();
    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody > tr")

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