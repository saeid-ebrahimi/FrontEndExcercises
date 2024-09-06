// our-domain.com/news/identifier
import {useRouter} from 'next/router'
function DynamicPage(){
    const router = useRouter()
    const newsId = router.query.newsId
    // Send a Request to the backend API
    // to fetch the news item with newsId
    return <h1>The Dynamic Page</h1>
}
export default DynamicPage;