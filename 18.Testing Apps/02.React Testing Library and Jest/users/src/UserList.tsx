
import { User } from './App'

export default function UserList({ users }: { users: User[] }) {
    const renderedUsers = users.map((user) => {

        return <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody data-testid="user-list">
                {users && users.length > 0 ? renderedUsers : <tr><td style={{ color: "gray" }} colSpan={2}>{"The list of users is empty"}</td></tr>}
            </tbody>
        </table >
    )
}
