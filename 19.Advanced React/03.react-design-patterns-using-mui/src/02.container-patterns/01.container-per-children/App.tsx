import "../App.css"
import { UserInfo } from "./user-info"
import { UserLoader } from "./user-loader"

export default function App() {
    return <>
        {/* <CurrentUserLoader>
            {(user) => <UserInfo user={user} />}
        </CurrentUserLoader> */}
        <UserLoader userId={2}>
            {(user) => <UserInfo user={user} />}
        </UserLoader>
    </>
}