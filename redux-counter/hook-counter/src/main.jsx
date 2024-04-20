import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CounterContextProvider } from './CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
)
