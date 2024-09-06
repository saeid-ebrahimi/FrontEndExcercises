
import PostForm from '@/components/post-form';
import { createPost } from '@/actions/posts';

export async function generateMetadata(){
    return(
      {
        title: `New Post`,
        description: "Add new Post"
      }
    )
}

export default function NewPostPage({params}) {
  return (
    <PostForm action={createPost}/>
  )
}
