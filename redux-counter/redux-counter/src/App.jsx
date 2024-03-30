import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <span>
            count is: <br />
            <span>{count}</span>
          </span>
        </button>
      </div>
    </>
  )
}

export default App
