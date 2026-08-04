import { LoggedUserInfo } from './logged-user-info'

export default function App() {
    return (
        <LoggedUserInfo user={{
            name: 'Susan',
            age: 30,
            country: 'USA',
            books: []
        }} />
    )
}
