import React, { useEffect } from 'react';
import { Button, Table } from "react-bootstrap";
import { EditPostModal } from './EditPostModal';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts/posts.slice";
import { DeletePostModal } from './DeletePostModal';

export default function UserTable({ mode }) {
    const { data: posts, isLoading, error } = useSelector(state => state.post)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <Table className={"mt-3"} data-bs-theme={mode} striped bordered hover>
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
