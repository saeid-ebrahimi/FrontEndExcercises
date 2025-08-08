import { Button } from 'react-bootstrap';
import { useAddPostMutation } from '../redux/post/post.api';
import { faker } from '@faker-js/faker';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function AddPost({ userId }: { userId: string }) {
  const [addPost, { data: postDataResult, isLoading, isError, isSuccess, error }] = useAddPostMutation()
  const handleAddPost = () => {
    if (isLoading) return;
    const data = {
      userId,
      title: faker.book.title()
    }
    addPost(data)
  }
  const showFeedback = () => {
    if (isLoading) {
      return toast.info("adding post data...")
    }
    if (isError)
      if ("data" in error)
        toast.error(error.data as string)
      else if ("message" in error)
        toast.error(error.message as string)
    if (isSuccess) {
      console.log(postDataResult);
      return toast.success("add post was successful")
    }
  }
  useEffect(() => {
    showFeedback()
  }, [isLoading, isError, isSuccess])
  return (
    <div style={{ textAlign: 'end' }}>
      <Button variant='success' disabled={isLoading} onClick={handleAddPost}>
        {isLoading ? "Adding post..." : "Add Post"}
      </Button>{' '}
    </div>
  );
}

export default AddPost;
