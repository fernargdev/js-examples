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

  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [height, setHeight] = useState('')

  return (
    <div className="apps">
      <div className="app">
        <h2>Counter App</h2>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>

      <div className="app">
        <h2>Click App</h2>

        <div>{left.value}</div>
        <button onClick={left.increase}>left</button>

        <div>{right.value}</div>
        <button onClick={right.increase}>right</button>
      </div>

      <div className="app">
        <h2>Form App</h2>
        <form>
          name:{'  '}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          born:{'  '}
          <input
            type="date"
            value={born}
            onChange={(event) => setBorn(event.target.value)}
          />
          <br />
          height:{'  '}
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </form>
        <div>
          Name: {name} <br />
          Born: {born} <br />
          height: {height}
        </div>
      </div>
    </div>
  )
}

export default App
