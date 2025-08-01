import React, { useEffect, useState } from 'react';
import { Pagination, Table } from "react-bootstrap";
import { EditPostModal } from './EditPostModal';
import { useDispatch, useSelector } from "react-redux";
;
import { DeletePostModal } from './DeletePostModal';
import { useQuery } from '@tanstack/react-query';
import { getPosts, getPostsByPage } from '../apis';
import { toast } from 'react-toastify';
const PAGE_SIZE = 2
export default function PostTable({ theme }) {
    const [active, setActive] = useState(1)
    // const { data: posts, isLoading, error } = useSelector(state => state.post)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getPosts())
    // }, [])

    const { data: posts, } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    })

    const { isPending, isLoading, isError, isSuccess, data: partialPosts, error, isFetching, isPaused } = useQuery({
        queryKey: ["posts", active],
        queryFn: () => getPostsByPage(active, PAGE_SIZE),
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("getting posts was successful")
        }
        if (isError) {
            toast.error(`getting data have ${error.message} error`)
        }
    }, [isError, isSuccess])
    const totalItems = posts?.length;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE);
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(<Pagination.Item onClick={() => { setActive(number) }} key={number} active={number === active}>{number}</Pagination.Item>)
    }
    return (
        <>
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
                    </tr> : posts && partialPosts && partialPosts.length > 0 ? partialPosts.map(post => <tr key={post.id}>
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
            <Pagination size={"sm"}>{items}</Pagination>
        </>

    )
}
