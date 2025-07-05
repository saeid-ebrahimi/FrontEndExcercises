import React from 'react';
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { useEffect } from 'react';
import { useState } from 'react';
import { EditPostModal } from './EditPostModal';
import { CreatePostModal } from "./CreatePostModal";
export default function UserTable() {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const request = await axios.get('http://localhost:3000/posts')
        setPosts(request.data)
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div className={"px-3 mt-3"}>
            <CreatePostModal posts={posts} setPosts={setPosts} />
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
                            <EditPostModal post={post} />
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
        </div>
    )
}
