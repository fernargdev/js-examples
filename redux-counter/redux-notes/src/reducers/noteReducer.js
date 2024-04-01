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

export default noteReducer
