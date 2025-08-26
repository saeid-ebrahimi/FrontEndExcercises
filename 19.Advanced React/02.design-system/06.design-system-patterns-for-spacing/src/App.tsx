import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { BundledMenu } from './components/5.inline-bundle/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BundledMenu />
      </QueryClientProvider >


    </>
  )
}

export default App
