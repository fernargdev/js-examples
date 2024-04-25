/* eslint-disable no-unused-vars */
import { createContext, useReducer, useContext } from 'react'

const CounterContext = createContext()

export const useCounterValue = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[0]
}

export const useCounterDispatch = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}
