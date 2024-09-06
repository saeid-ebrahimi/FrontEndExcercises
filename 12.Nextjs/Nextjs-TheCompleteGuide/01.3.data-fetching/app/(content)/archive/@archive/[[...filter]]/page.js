import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { Fragment, Suspense } from "react";

async function FilteredNews({year, month}){
    let news ;
    if(year && !month){
        news = await getNewsForYear(year)
    } else if( year && month){
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period.</p>
    if(news && news.length > 0){
        newsContent = <NewsList news={news}/>
    }
    return newsContent;
}

async function FilterHeader({year, month}){
    const availableYears = await getAvailableNewsYears();

    if (year && !availableYears.includes(year))
    {
        throw new Error("Invalid filter for year")
    }
    if (month && !getAvailableNewsMonths(year).includes(month))
    {
        throw new Error("Invalid filter for month")
    }

    let links = availableYears;

    if (year && !month)
    {
        links = getAvailableNewsMonths(year);
    } else if (year && month)
    {
        links = [];
    }
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links && links.map(link => <li key={link}>
                        <Link href={year ? `/archive/${year}/${link}` : `/archive/${link}`}>{link}</Link>
                    </li>)}
                </ul>

            </nav>
        </header>
    )
}
export default async function FilteredNewsPage({params}){
    const filter = params.filter
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    return (
        <Fragment>
            <Suspense fallback={<p>loading filter...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth}/>
            </Suspense>
            <Suspense fallback={<p>Loading news ...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </Fragment>
    )
}