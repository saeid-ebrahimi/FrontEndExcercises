import { useEffect, useState, type Attributes, type ComponentType } from "react"
import { getData } from "../../apis/cmsApis";
import type { TAuthor } from "../../components/authors/large-list-item";

export function withUser<P>(Component: ComponentType<P>, url: string) {
    const WrappedComponent: React.FC<P & Attributes> = (props) => {
        const [user, setUser] = useState<TAuthor | null>(null);
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            (async () => {
                const result = await getData<TAuthor>(url);
                setUser(result)
                setLoading(false)
            })()
        }, [])

        return <>
            {user ? <Component {...props} data={user} /> : <h2>Loading data...</h2>}
        </>
    }
    WrappedComponent.displayName = `withUserInfo`;
    return WrappedComponent;
};