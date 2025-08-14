import { useEffect, useState, type ComponentType } from "react";
import type { TAuthor } from "../../components/authors/large-list-item";
import { getData, postData } from "../../apis/cmsApis";

export function withUpdateUserInfo<P>(Component: ComponentType<P>, url: string) {
    return (props: P) => {
        const [initialUser, setInitialUser] = useState<TAuthor | null>(null);
        const [user, setUser] = useState<TAuthor | null>(null);
        useEffect(() => {
            (async () => {
                const result = await getData<TAuthor>(url)
                setInitialUser(result)
                setUser(result)
            })()
        }, [])

        const onChangeData = (updates: Partial<TAuthor>) => {
            const newData: TAuthor = {
                name: updates?.name ?? user?.name ?? "",
                age: updates?.age ?? user?.age ?? 0,
                country: updates?.country ?? user?.country ?? "",
                books: updates?.books ?? user?.books ?? []
            }
            setUser(newData)
        }

        const onPostData = async () => {
            if (user) {
                const result = await postData<TAuthor>(url, user)
                setInitialUser(result);


                setUser(result)
            }

        }

        const onResetData = () => {
            setUser(initialUser)
        }
        return <Component {...props} data={user} onChangeData={onChangeData} onPostData={onPostData} onResetData={onResetData} />
    }
}