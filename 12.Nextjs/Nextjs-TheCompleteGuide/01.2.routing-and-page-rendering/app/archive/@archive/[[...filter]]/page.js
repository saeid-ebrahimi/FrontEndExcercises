import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}){
    const filter = params.filter
    console.log(filter);
    // const filteredNews = getNewsForYear(selectedYear)
    //     return (
    //         <NewsList news={filteredNews}/>
    // )
}