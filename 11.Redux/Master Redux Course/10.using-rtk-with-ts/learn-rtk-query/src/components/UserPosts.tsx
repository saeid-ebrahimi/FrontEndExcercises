import React, { useEffect } from 'react'
import { useGetPostsQuery } from '../redux/post/post.api'
import { toast } from 'react-toastify';
import classes from "./UsersPosts.module.css";

export default function UserPosts({ userId }: { userId: string }) {
    const {
        data: posts,
        isError: isGetPostsError,
        isSuccess: isGetPostsSuccess,
        isLoading: isGetPostsLoading,
        isFetching: isGetPostsFetching,
        error: getPostsError
    } = useGetPostsQuery(userId);

    useEffect(() => {
        if (isGetPostsFetching) {
            toast.info("getting posts data...")
        }
        if (isGetPostsError)
            if ("data" in getPostsError)
                toast.error(getPostsError.data as string)
            else if ("message" in getPostsError)
                toast.error(getPostsError.message as string)
        if (isGetPostsSuccess)
            toast.success("getting posts data is successful!")
    }, [isGetPostsError, isGetPostsSuccess, isGetPostsLoading])
    return (
        <>
            {
                isGetPostsLoading ? <div style={{ color: "white" }}>Loading data ...</div> : isGetPostsError ?
                    <div style={{ color: "red" }}>error while getting data</div> :
                    posts && posts?.length > 0 ?
                        <ul className={classes.posts}>
                            {posts.map(post => <li className={classes.post} key={post.id}>{post.title}</li>)}
                        </ul> :
                        <div>Post list is Empty</div>
            }
        </>
    )
}
