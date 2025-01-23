import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ToDoProvider from './context/ToDoContext.jsx'
createRoot(document.getElementById('root')).render(
  <ToDoProvider>
    <App />
  </ToDoProvider>,
)
