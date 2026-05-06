import "../App.css"
import { CurrentUserLoader } from "../02.container-patterns/01.container-per-children/current-user-loader"
import { UserInfo } from "../02.container-patterns/01.container-per-children/user-info"
import { UserLoader } from "../02.container-patterns/01.container-per-children/user-loader"

export default function App() {
    return <>
        <UserLoader userId={2}>
            {(user) => <UserInfo user={user} />}
        </UserLoader>
    </>
}