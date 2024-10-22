import { useQuery } from '@tanstack/react-query'
import { getActors } from '../services/GenreService'

export function useGetActors(movieid) {
  const { data, isLoading } = useQuery(['search movie actors', movieid], () =>
    getActors(movieid)
  )

  return { data, isLoading }
}
