const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload)

    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload
      const noteToChange = state.find((n) => n.id === id)
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
