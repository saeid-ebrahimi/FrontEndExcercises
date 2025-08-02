import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';
import AddPost from './AddPost';
import { useGetUsersQuery } from '../redux/user/user.api';
import { toast } from 'react-toastify';

function Home() {
  const { data: users, isError, isSuccess, isLoading, error, isFetching } = useGetUsersQuery();

  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleSelect = (eventKey: AccordionEventKey) => {
    setActiveKey(activeKey === eventKey ? null : (eventKey as string));
  };

  console.log('check activeKey', activeKey);
  useEffect(() => {
    if (isFetching)
      toast.info("getting users data")
    if (isError)
      toast.error(error.toString())
    if (isSuccess)
      toast.success("getting users data is successful!")
  }, [isError, isSuccess, isFetching])
  return (
    <>
      {
        isLoading ? <div>Loading data ...</div> : users && users?.length > 0 ? <Accordion activeKey={activeKey} onSelect={handleSelect} alwaysOpen>
          {users.map(user => (<Accordion.Item key={user.id} eventKey={user.id}>
            <Accordion.Header>{user.name}</Accordion.Header>
            <Accordion.Body>
              <AddPost />
              <ul>
                <li>Post title 1</li>
                <li>Post title 2</li>
                <li>Post title 3</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          ))}
        </Accordion> : <div>User list is Empty</div>
      }</>
  );
}

export default Home;
