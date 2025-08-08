import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';
import AddPost from './AddPost';
import { useGetUsersQuery } from '../redux/user/user.api';
import { toast } from 'react-toastify';
import UserPosts from './UserPosts';

function Home() {
  const { data: users, isError: isGetUsersError, isSuccess: isGetUsersSuccess, isLoading: isGetUsersLoading, error: getUsersError, isFetching: isGetUsersFetching } = useGetUsersQuery();

  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleSelect = (eventKey: AccordionEventKey) => {
    setActiveKey(activeKey === eventKey ? null : (eventKey as string));
  };

  useEffect(() => {
    if (isGetUsersFetching)
      toast.info("getting users data...")
    if (isGetUsersError)
      if ("data" in getUsersError)
        toast.error(getUsersError.data as string)
      else if ("message" in getUsersError)
        toast.error(getUsersError.message as string)
    if (isGetUsersSuccess)
      toast.success("getting users data is successful!")
  }, [isGetUsersError, isGetUsersSuccess, isGetUsersFetching])
  return (
    <>
      {
        isGetUsersLoading ? <div style={{ color: "white" }}>Loading data ...</div> : isGetUsersError ?
          <div style={{ color: "red" }}>error while getting data</div> :
          users && users?.length > 0 ?
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              {users.map(user => (<Accordion.Item key={user.id} eventKey={user.id}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  {activeKey === user.id &&
                    <>
                      <AddPost userId={user.id} />
                      <UserPosts userId={user.id} />
                    </>}
                </Accordion.Body>
              </Accordion.Item>
              ))}
            </Accordion> :
            <div>User list is Empty</div>
      }</>
  );
}

export default Home;
