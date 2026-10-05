import { useState, useEffect, useRef } from 'react';

export function ArticleEditor({ initialContent }: { initialContent: string }) {
    const [content, setContent] = useState(initialContent);
    const [saveStatus, setSaveStatus] = useState('Saved');
    const isFirstRenderRef = useRef(true);

    useEffect(() => {
        // 🛑 Skip auto-saving when the component first loads the initialContent
        if (isFirstRenderRef.current) {
            isFirstRenderRef.current = false;
            return;
        }

        // 🔄 Auto-save debounced timer runs ONLY when user edits content
        setSaveStatus('Saving...');
        const timer = setTimeout(() => {
            localStorage.setItem('draft_article', content);
            setSaveStatus('Draft saved locally');
        }, 1000);

        return () => clearTimeout(timer);
    }, [content]);

    return (
        <div>
            <p>Status: <strong>{saveStatus}</strong></p>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                cols={50}
            />
        </div>
    );
}