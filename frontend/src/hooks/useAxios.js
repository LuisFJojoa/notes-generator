import { useEffect, useState } from "react"
import NoteDataService from "../services/note.service"


export const useAxios = (query, param, hasStatusChanged) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getNotesByState = async (param) => {

    setState({
      ...state,
      isLoading: true
    })

    const result = await NoteDataService.findByState(param)
    const data = await result.data

    setState({
      data,
      isLoading: false,
      hasError: null,
    })
  }

  const updateNote = async (param, hasStatusChanged) => {

    setState({
      ...state,
      isLoading: true
    })

    const response = await NoteDataService.update(param.id, param)
    const status = response.status

    if (status === 200) {
      getNotesByState(hasStatusChanged ? (param.state === 'archived') ? 'no-archived': 'archived' : param.state)
    } 
  }

  const createNote = async (param) => {
    setState({
      ...state,
      isLoading: true
    })

    const response = await NoteDataService.create(param)
    const status = response.status

    if (status === 200) {
      getNotesByState('no-archived')
    } 
  }

  const deleteNote = async (param) => {

    setState({
      ...state,
      isLoading: true
    })

    const response = await NoteDataService.delete(param.id)
    const status = response.status

    if (status === 200) {
      getNotesByState(param.state)
    } 

  }

  useEffect(() => {

    switch (query) {
      case "create":
        createNote(param)
      case "delete":
        deleteNote(param)
      case "update":
        updateNote(param, hasStatusChanged)
      case "findByState":
        getNotesByState(param)
    }
  }, [query])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    createNote,
    deleteNote,
    updateNote,
    getNotesByState
  }
}
