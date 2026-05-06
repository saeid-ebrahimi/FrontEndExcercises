import "../App.css"
import { CurrentUserLoader } from "../02.container-patterns/curtrent-user-loader"
import { UserInfo } from "../02.container-patterns/user-info"

export default function App() {
    return <>
        <CurrentUserLoader>
            {(user) => <UserInfo user={user} />}
        </CurrentUserLoader>
    </>
}