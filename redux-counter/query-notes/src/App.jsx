import './styles/index.css'
import './styles/App.css'

import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { createNote, getNotes, updateNote } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  const newNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['notes'])
      queryClient.setQueryData(['notes'], notes.concat(newNote))
    },
  })

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    newNoteMutation.mutate({ content, important: false })
  }

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['notes'])
      const updatedNotes = notes.map((note) => {
        if (note.id === newNote.id) return newNote
        return note
      })
      queryClient.setQueryData(['notes'], updatedNotes)
    },
  })

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important })
  }

  const result = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes,
    refetchOnWindowFocus: false,
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) return <div>Loading data...</div>

  const notes = result.data

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? 'important' : ''}</strong>
        </li>
      ))}
    </div>
  )
}

export default App
