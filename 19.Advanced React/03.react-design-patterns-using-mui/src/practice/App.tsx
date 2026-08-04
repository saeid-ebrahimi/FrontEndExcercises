// import { UserInfoWrapper } from "../04.HOC-design-pattern/user-info-wrapper";

import { AnalyzedUserInfo } from "../04.HOC-design-pattern/components/analyzed-user-info";

export default function App() {

    return <>
        {/* <UserInfoWrapper
            user={{ age: 23, books: [], country: "USA", name: "John" }}
            calledIn={"List of users"}
            utmData={{
                utm_source: "google",
                utm_medium: "cpc",
                utm_campaign: "summer_sale_2026",
                utm_term: "react hoc tutorial",
                utm_content: "text_ad_variant_a",
            }}
        /> */}
        <AnalyzedUserInfo user={{ age: 23, books: [], country: "USA", name: "John" }} />
    </>

}