import { get } from "./utils/https";
import { ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png"
import ErrorMessage from "./components/ErrorMessage";
type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}
function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>()
  useEffect(() => { 
    const fetchPosts = async () => {
      setIsFetching(true)
      try
      {
        const data = await get("https://jsonplaceholder.typicode.com/posts") as RawDataBlogPost[];
        const blogPosts: BlogPost[] = data.map((post) => (
          {
            id: post.id,
            title: post.title,
            text: post.body
          }
        ))
        setFetchedPosts(blogPosts)
      } catch (error )
      {
        if (error instanceof Error)
        {
          setError(error.message)
        }
      }
      
      setIsFetching(false)
      
    }
    fetchPosts()
  }, [])
  let content: ReactNode;
  if (error)
  {
    content = <ErrorMessage text={error} />
  }
  if (fetchedPosts)
  {
    content = <BlogPosts posts={fetchedPosts} />
  }
  if (isFetching)
  {
    content = <p id="loading-fallback">Fetching posts...</p>
  }
  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
      {content}
    </main>
  )

}

export default App;
