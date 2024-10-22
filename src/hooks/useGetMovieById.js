import { useQuery } from '@tanstack/react-query'
import { getMovieById } from '../services/GenreService'

export function useGetMovieById(id) {
  const { data, isLoading } = useQuery(['search movie By Id', id], () =>
    getMovieById(id)
  )

  return { data, isLoading }
}
