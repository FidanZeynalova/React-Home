import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './context/BodyColor.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
