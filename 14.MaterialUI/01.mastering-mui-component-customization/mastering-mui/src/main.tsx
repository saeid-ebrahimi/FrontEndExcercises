import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './02.core-concepts/06.component-class-object/App'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
