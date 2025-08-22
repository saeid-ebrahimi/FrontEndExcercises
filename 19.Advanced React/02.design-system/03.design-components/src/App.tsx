

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Lets Build Some Components</h1>
      </QueryClientProvider >


    </>
  )
}

export default App
