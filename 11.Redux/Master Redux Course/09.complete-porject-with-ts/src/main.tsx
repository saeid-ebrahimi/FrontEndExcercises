import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { store } from "./redux/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60 * 5, // Data considered stale after 5 minutes
      // cacheTime: 1000 * 60 * 60, // Cached data is kept for 1 hour
      refetchOnWindowFocus: true, // Disable refetching on window focus
      retry: 3, // Retry failed queries 3 times
      // retryDelay: attemptIndex => Math.min(1000 * (2 ** attemptIndex), 30000), // Exponential backoff for retries
      refetchOnReconnect: 'always',
      // gcTime: 1000 * 60 * 10, // Garbage Collector time interval
      // refetchInterval: 1000 * 60 * 5, // Refetch data intervale without considering stale time
    },
    mutations: {
      onError: (error, variables, context) => {
        console.error('Mutation error:', error, variables);
      },
      onSuccess: (data, variables, context) => {
        console.log('Mutation success:', data, variables);
      },
    }
  },
});
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
