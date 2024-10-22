import { useQuery } from '@tanstack/react-query'

import { useState } from 'react'
import { getMovies } from '../services/GenreService'

export function useSearch() {
  const [search, setSearch] = useState('')

  const { data, isSuccess } = useQuery(
    ['search movie list', search],
    () => getMovies(search),
    {
      //select: ({ data }) => data,
      enabled: !!search,
    }
  )
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  function handleCrear() {
    setSearch('')
  }
  return { data, isSuccess, handleSearch, handleCrear, search }
}
