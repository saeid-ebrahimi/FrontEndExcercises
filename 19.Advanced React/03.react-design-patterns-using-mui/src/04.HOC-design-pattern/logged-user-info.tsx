import { UserInfo } from "./user-info";
import { withLogger } from "./with-logger";

export const LoggedUserInfo = withLogger({
    calledIn: "ProfilePage",
    utmData: {
        utm_source: "google",
        utm_campaign: "summer",
    },
})(UserInfo);