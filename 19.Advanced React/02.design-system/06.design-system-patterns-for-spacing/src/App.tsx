import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import InfoFormWithColumns from './components/3-column-pattern/start';
import { Cards } from './components/4.grid-pattern/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Cards />
      </QueryClientProvider >


    </>
  )
}

export default App
