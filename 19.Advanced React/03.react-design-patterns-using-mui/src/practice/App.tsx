import { CurrentUserLoader2 } from "../02.container-patterns/01.container-per-children/current-user-loader";
import { UserInfo } from "../02.container-patterns/01.container-per-children/user-info";

export default function App() {

    return <>
        <CurrentUserLoader2>
            {(user) => <UserInfo user={user} />}
        </CurrentUserLoader2>
    </>

}