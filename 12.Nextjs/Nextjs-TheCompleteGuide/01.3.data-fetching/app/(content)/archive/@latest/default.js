import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";
import { Fragment } from "react";

export default async function DefaultPage(){
    const latestNews = await getLatestNews()
    return (
        <Fragment>
            <h2>Latest news</h2>
            <NewsList news= {latestNews}/>    
        </Fragment>
    )
}