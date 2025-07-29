import axios from "axios";
export const getPosts = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    return response.data;
}

export const getPostsByPage = async (pageNumber, pageSize) => {
    const response = await axios.get("http://localhost:3000/posts", {
        params: {
            _page: pageNumber,
            _limit: pageSize
        }
    })
    return response.data
}

export const getPostById = async (postId) => {
    if (postId === "undefined" || postId === null) return
    const response = await axios.get(`http://localhost:3000/posts/${postId}`, {
    })
    return response.data
}