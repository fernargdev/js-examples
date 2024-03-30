/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <>
      <div className="card">
        <div>{store.getState()}</div>
        <button onClick={(e) => store.dispatch({ type: 'INCREMENT' })}>
          +
        </button>
        <button onClick={(e) => store.dispatch({ type: 'DECREMENT' })}>
          -
        </button>
        <button onClick={(e) => store.dispatch({ type: 'ZERO' })}>0</button>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
