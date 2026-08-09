
import { withAnalytics } from './withAnalytics'
import { UserInfo } from '../logging/user-info'

export const AnalyzedUserInfo = withAnalytics({ event: "user-info", page: "profile" })(UserInfo)
