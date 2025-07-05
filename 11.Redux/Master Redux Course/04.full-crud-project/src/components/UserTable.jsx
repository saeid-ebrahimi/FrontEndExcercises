import React from 'react';
import { Button, Table } from "react-bootstrap";
import { EditPostModal } from './EditPostModal';
export default function UserTable({ posts, setPosts }) {
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
                        <EditPostModal post={post} posts={posts} setPosts={setPosts} />
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
