

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { Button } from './components/button';
import { Modal } from './components/modal';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Lets Build Some Components</h1>
        <Button className={"large warning"}>Click Here</Button>
        <Modal />
      </QueryClientProvider >


    </>
  )
}

export default App
