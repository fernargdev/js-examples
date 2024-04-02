import './App.css'
import NewNote from './components/NewNote'

import { toggleImportanceOf } from './reducers/noteReducer'
import { useSelector } from 'react-redux'

const App = () => {
  const notes = useSelector((state) => state)

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <NewNote />
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
