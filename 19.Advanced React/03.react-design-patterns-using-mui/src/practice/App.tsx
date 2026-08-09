
import { ProtectedDashboard } from "../04.HOC-design-pattern/authentication/protected-dashboard";
import { UserProfile } from "../04.HOC-design-pattern/data-fetching/user-profile";
import { LoggedResourceLoader } from "../04.HOC-design-pattern/logging/logged-resource-loader";

export default function App() {

    return <>
        <ProtectedDashboard />
        <LoggedResourceLoader />
        <UserProfile />
    </>

}