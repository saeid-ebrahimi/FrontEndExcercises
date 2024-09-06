// our-domain.com/news
import {Fragment} from "react";
import Link from  'next/link'
function NewsPage(){
    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            {/* using a tag don't make our SPA links because of its default behavioral */}
            <li>
                <Link href="/news/nextjs-is-a-great-framework">NextJS Is A Great Framework</Link>
            </li>
            <li>
                <Link href="/news/reactjs-is-a-great-library">ReactJS Is A Great Library</Link>
            </li>
        </ul>
    </Fragment>
}
export default NewsPage;