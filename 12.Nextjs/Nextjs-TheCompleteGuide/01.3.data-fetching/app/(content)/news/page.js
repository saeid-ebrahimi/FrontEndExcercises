
import { Fragment } from "react"
import NewsList from "@/components/news-list"
import { getAllNews } from "@/lib/news"

export default async function newsPage()
{
    const news = await getAllNews();
    return (
        <Fragment>
            <h1>News Page</h1>
            <NewsList news={news} />
        </Fragment>
    )
}