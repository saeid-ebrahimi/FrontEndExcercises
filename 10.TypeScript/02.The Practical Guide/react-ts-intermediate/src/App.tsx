import Input from "./component/Input";
import Button from "./component/Button";
import Container from "./component/Container";
import Form, {type FormHandle} from "./component/Form";
import { useRef } from "react";

function App() {
  const inputCompRef = useRef(null);
  const formCompRef = useRef<FormHandle>(null);

  function handleSave(data: unknown){
    const extractedData = data as { name: string; age: string; }
    console.log(extractedData);
    formCompRef.current?.clear();
  }
  return (
    <main>
      <Input id="name" type="text" label="Your name" ref={inputCompRef} />
      <Form onSave={handleSave} ref={formCompRef}>
          <Input id="name" type="text" label="Your name" />
          <Input id="age" type="text" label="Your age" />
          <Button el="button">A Button</Button>
      </Form>
          <Button el="anchor" href="https://www.google.com">A Link</Button>
      <Container as={Button} el="button" onClick={() => { }}>Click Me</Container>
    </main>
  )
}

export default App;
