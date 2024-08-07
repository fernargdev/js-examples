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

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

const App = () => {
  const counter = useCounter()

  const left = useCounter()
  const right = useCounter()

  const name = useField('text')
  const born = useField('date')
  const height = useField('number')

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
          <input {...name} />
          <br />
          birthdate:{'  '}
          <input {...born} />
          <br />
          height:{'  '}
          <input {...height} />
        </form>
        <div>
          Name: {name.value} <br />
          Birthdate: {born.value} <br />
          Height: {height.value}
        </div>
      </div>
    </div>
  )
}

export default App
