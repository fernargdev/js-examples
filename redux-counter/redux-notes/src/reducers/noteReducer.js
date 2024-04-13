import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

const generateId = () => Number((Math.random() * 10000000).toFixed(0))

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      const content = action.payload

      state.push({ content, important: false, id: generateId() })
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
  },
})

export const { createNote, toggleImportanceOf, appendNote } = noteSlice.actions

export default noteSlice.reducer
