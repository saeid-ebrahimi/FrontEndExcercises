import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { Modal } from './components/11.Modal/modal';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Modal />
      </QueryClientProvider >


    </>
  )
}

export default App
