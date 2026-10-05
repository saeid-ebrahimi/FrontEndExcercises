
import { ArticleEditor } from './06.RefExplanation/10.ref-for-instance-flag/components/article-editor';

export default function App() {
  const initialContent = localStorage.getItem('draft_article') || '';
  return (
    <ArticleEditor initialContent={initialContent} />
  )
};