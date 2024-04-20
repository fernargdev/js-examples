/* eslint-disable react/prop-types */
import './App.css'

import CounterContext from './CounterContext'

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

const App = () => {
  return (
    <>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </>
  )
}

export default App
