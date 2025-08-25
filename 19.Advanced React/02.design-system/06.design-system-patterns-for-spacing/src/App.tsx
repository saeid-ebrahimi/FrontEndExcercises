import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import InfoFormWithColumns from './components/3-column-pattern/start';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InfoFormWithColumns />
      </QueryClientProvider >


    </>
  )
}

export default App
