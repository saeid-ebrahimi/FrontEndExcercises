import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { GiftCardList } from './components/07.pad-pattern/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GiftCardList />
      </QueryClientProvider >


    </>
  )
}

export default App
