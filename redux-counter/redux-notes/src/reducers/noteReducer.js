const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]

    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id
      const noteToChange = state.find((n) => n.id === id)

      if (!noteToChange) return state

      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      return state.map((n) => (n.id !== id ? n : changedNote))
    }

    default:
      return state
  }
}

const generateId = () => Number((Math.random() * 10000000).toFixed(0))

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id },
  }
}

export default noteReducer
