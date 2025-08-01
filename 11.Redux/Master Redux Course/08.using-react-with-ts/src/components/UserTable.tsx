import type { TUserTableProps } from "./types";

export function UserTable({ users, children }: TUserTableProps) {
    const userListIsNotEmpty = users && users?.length > 0;

    let headers: string[] = []
    if (userListIsNotEmpty)
        headers = Object.keys(users?.[0])
    return (
        <>
            {children}
            {userListIsNotEmpty ? <table>
                <thead>
                    <tr>
                        {headers.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table> : <p>user list is empty</p>}
        </>
    )
}