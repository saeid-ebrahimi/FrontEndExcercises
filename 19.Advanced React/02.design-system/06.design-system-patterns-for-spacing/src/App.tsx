import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SubscribeForm } from './components/1-layers-pattern/start';
import './App.css'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SubscribeForm />
      </QueryClientProvider >


    </>
  )
}

export default App
