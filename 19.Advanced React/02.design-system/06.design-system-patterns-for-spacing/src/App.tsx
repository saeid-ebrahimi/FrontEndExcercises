import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { NewProductsList } from './components/09.media-wrapper/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NewProductsList />
      </QueryClientProvider >


    </>
  )
}

export default App
