import './App.css'

import { useState } from 'react'

const useCounter = () => {
  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    setValue(value - 1)
  }

  const zero = () => {
    setValue(0)
  }

  return {
    value,
    increase,
    decrease,
    zero,
  }
}

const App = () => {
  const counter = useCounter()
  const left = useCounter()
  const right = useCounter()

  return (
    <div>
      <div>
        <h2>Counter App</h2>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>

      <div>
        <h2>Click App</h2>

        <div>{left.value}</div>
        <button onClick={left.increase}>left</button>

        <div>{right.value}</div>
        <button onClick={right.increase}>right</button>
      </div>
    </div>
  )
}

export default App
