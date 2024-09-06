import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { Fragment } from "react";

export default function FilteredNewsPage({params}){
    const filter = params.filter
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    let news;
    let links = getAvailableNewsYears();
    if(selectedYear && !selectedMonth){
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }else if(selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }
    let newsContent = <p> Cannot find the selected news</p>
    if(news){
        newsContent = <NewsList news={news} />
    }
    if(selectedYear && !getAvailableNewsYears().includes(+selectedYear)){
        throw new Error("Invalid filter for year")
    }
    if (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)){
        throw new Error("Invalid filter for month")
    }
    return (
        <Fragment>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links && links.map(link => <li key={link}>
                            <Link href={selectedYear? `/archive/${selectedYear}/${link}`: `/archive/${link}`}>{link}</Link>
                        </li>)}
                    </ul>
                    
                </nav>
            </header>
            {newsContent}
        </Fragment>
    )
}