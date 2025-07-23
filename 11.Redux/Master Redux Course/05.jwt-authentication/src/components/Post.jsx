import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Post() {
    const [posts, setPosts] = useState()
    async function getUserPosts() {
        const accessToken = localStorage.getItem("access_token")
        const response = await axios.get("http://localhost:3000/api/v1/posts", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        console.log(response.data);
        setPosts(response.data)
    }
    useEffect(() => {
        getUserPosts()
    }, [])
    return (
        <div>
            <Link to={"/create-post"} title={"Create Post "} className={"btn btn-primary"} >Create Post</Link>
            <Table className={"mt-3"} striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.length > 0 && posts.map((post,) =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}
