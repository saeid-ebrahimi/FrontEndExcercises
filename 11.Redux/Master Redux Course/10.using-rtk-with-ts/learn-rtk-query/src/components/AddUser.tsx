import { Button } from 'react-bootstrap';
import { faker } from "@faker-js/faker";
import { useAddUserMutation } from '../redux/user/user.api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function AddUser() {
  const [addUser, { data: userDataResult, isLoading, isError, isSuccess, error }] = useAddUserMutation();

  const handleAddUser = () => {
    if (isLoading) return;
    const data = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }
    addUser(data)

  }

  const showFeedback = () => {
    if (isLoading) {
      return toast.info("adding user data")
    }
    if (isError)
      if ("data" in error)
        toast.error(error.data as string)
      else if ("message" in error)
        toast.error(error.message as string)
    if (isSuccess) {
      console.log(userDataResult);
      return toast.success("adding user was successful")
    }
  }
  useEffect(() => {
    showFeedback()
  }, [isLoading, isError, isSuccess])
  return (
    <>
      <Button variant='primary' style={{ marginBottom: '20px' }} disabled={isLoading} onClick={handleAddUser}>
        {isLoading ? "Adding User..." : "Add User"}
      </Button>
    </>
  );
}

export default AddUser;
