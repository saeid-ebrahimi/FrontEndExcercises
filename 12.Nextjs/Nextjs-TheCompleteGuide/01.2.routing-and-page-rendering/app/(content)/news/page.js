
import { Fragment } from "react"
import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "@/components/news-list"

export default function newsPage(){
    return(
        <Fragment>
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS}/>
        </Fragment>
    )
}