import { ArticleEditor } from "./components/article-editor";


export default function App() {
    const initialContent = localStorage.getItem('draft_article') || '';
    return (
        <ArticleEditor initialContent={initialContent} />
    )
};