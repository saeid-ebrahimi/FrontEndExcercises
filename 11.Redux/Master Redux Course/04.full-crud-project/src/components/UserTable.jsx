import React, { useEffect } from 'react';
import { Button, Table } from "react-bootstrap";
import { EditPostModal } from './EditPostModal';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts/posts.slice";

export default function UserTable() {
    const { data: posts, isLoading, error } = useSelector(state => state.post)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <Table className={"mt-3"} striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Views</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {posts && posts.length > 0 ? posts.map(post => <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.views}</td>
                    <td>
                        <EditPostModal postId={post.id} />
                        <Button variant={"danger"} className={"ms-2"} onClick={() => deletePost(post.id)}>Delete</Button>
                    </td>
                </tr>)
                    :
                    <tr>
                        <td colSpan={3}>
                            the posts list is empty
                        </td>
                    </tr>
                }
            </tbody>
        </Table>

    )
}
