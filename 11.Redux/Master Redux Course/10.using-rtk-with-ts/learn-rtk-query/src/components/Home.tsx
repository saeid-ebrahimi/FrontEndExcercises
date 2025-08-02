import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';
import AddPost from './AddPost';

function Home() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleSelect = (eventKey: AccordionEventKey) => {
    setActiveKey(activeKey === eventKey ? null : (eventKey as string));
  };

  console.log('check activeKey', activeKey);

  return (
    <Accordion activeKey={activeKey} onSelect={handleSelect} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>User #1</Accordion.Header>
        <Accordion.Body>
          <AddPost />
          <ul>
            <li>Post title 1</li>
            <li>Post title 2</li>
            <li>Post title 3</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>User #2</Accordion.Header>
        <Accordion.Body>
          <AddPost />
          <ul>
            <li>Post title 1</li>
            <li>Post title 2</li>
            <li>Post title 3</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Home;
