import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { Profile } from './components/08.center-pattern/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Profile />
      </QueryClientProvider >


    </>
  )
}

export default App
