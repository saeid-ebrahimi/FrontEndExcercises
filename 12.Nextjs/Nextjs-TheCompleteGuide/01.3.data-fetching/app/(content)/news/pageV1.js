"use client"
import { Fragment, useEffect, useState } from "react"
import NewsList from "@/components/news-list"

export default function newsPage(){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(()=>{
        const fetchNews = async()=> {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/news")
            if(!response.ok){
                setError("Failed to fetch news.");
                setIsLoading(false);
            }
            setIsLoading(false);
            const data = await response.json()
            setNews(data);
        }

        fetchNews();
    }, [])

    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    let newsContent;

    if(news){
        newsContent = <NewsList news={news}/>
    }

    return(
        <Fragment>
            <h1>News Page</h1>
            {newsContent}
        </Fragment>
    )
}