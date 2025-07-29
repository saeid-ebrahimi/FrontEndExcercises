import React, { useEffect } from 'react';
import { Table } from "react-bootstrap";
import { EditPostModal } from './EditPostModal';
import { useDispatch, useSelector } from "react-redux";
;
import { DeletePostModal } from './DeletePostModal';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../apis';
import { toast } from 'react-toastify';

export default function UserTable({ theme }) {
    // const { data: posts, isLoading, error } = useSelector(state => state.post)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getPosts())
    // }, [])

    const { isPending, isLoading, isError, isSuccess, data: posts, error, isFetching, isPaused } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    })

    useEffect(() => {
        if (isSuccess) {
            return toast.success("getting posts was successful")
        }
        if (isError) {
            return toast.error(`getting data have ${error.message} error`)
        }
    }, [isError, isSuccess])


    return (
        <Table className={"mt-3"} data-bs-theme={theme} striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Views</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <tr>
                    <td colSpan={4}>
                        Loading the posts list...
                    </td>
                </tr> : posts && posts.length > 0 ? posts.map(post => <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.views}</td>
                    <td className={"d-flex gap-2"}>
                        <EditPostModal postId={post.id} />
                        <DeletePostModal postId={post.id} postTitle={post.title} />
                    </td>
                </tr>)
                    :
                    <tr>
                        <td colSpan={4}>
                            the posts list is empty
                        </td>
                    </tr>
                }
            </tbody>
        </Table>

    )
}
