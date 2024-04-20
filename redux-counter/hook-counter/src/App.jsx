/* eslint-disable react/prop-types */
import './App.css'

import CounterContext from './CounterContext'

import { useReducer } from 'react'
import { useContext } from 'react'

const Display = () => {
  const [counter] = useContext(CounterContext)
  return <div>{counter}</div>
}

const Button = ({ type, label }) => {
  // eslint-disable-next-line no-unused-vars
  const [counter, dispatch] = useContext(CounterContext)
  return <button onClick={() => dispatch({ type })}>{label}</button>
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </CounterContext.Provider>
  )
}

export default App
