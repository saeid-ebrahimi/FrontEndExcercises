
import { withAnalytics } from '../analytics/withAnalytics'
import { UserInfo } from '../user-info'

export const AnalyzedUserInfo = withAnalytics({ event: "user-info", page: "profile" })(UserInfo)
