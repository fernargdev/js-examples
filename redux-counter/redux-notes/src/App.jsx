import './App.css'
import NewNote from './components/NewNote'
import Notes from './components/Notes'

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }

  return (
    <div>
      <NewNote />

      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('ALL')}
        />
        all{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('IMPORTANT')}
        />
        important{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('NONIMPORTANT')}
        />
        nonimportant{' '}
      </div>

      <Notes />
    </div>
  )
}

export default App
