import React from 'react'
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
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.length > 0 && posts.map((post, index) => <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    )
}
