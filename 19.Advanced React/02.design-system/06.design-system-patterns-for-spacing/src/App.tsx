import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { Menu } from './components/6.inline/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Menu />
      </QueryClientProvider >


    </>
  )
}

export default App
