import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

const generateId = () => Number((Math.random() * 10000000).toFixed(0))

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      state.push(action.payload)
    },

    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find((n) => n.id === id)

      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      console.log(current(state))

      return state.map((note) => (note.id !== id ? note : changedNote))
    },

    appendNote(state, action) {
      state.push(action.payload)
    },

    setNotes(state, action) {
      return action.payload
    },
  },
})

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions

export default noteSlice.reducer
