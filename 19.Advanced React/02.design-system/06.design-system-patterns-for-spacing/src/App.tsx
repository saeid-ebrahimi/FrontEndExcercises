import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { InfoForm } from './components/2-split-pattern/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InfoForm />
      </QueryClientProvider >


    </>
  )
}

export default App
