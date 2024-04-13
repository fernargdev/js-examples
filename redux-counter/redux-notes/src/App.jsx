import './App.css'

import { useEffect } from 'react'

import noteService from './sevices/notes'
import { setNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)))
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
