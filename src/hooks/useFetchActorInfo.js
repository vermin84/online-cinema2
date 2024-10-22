import { useQuery } from '@tanstack/react-query'
import { fetchActorInfoAndFilmography } from '../services/GenreService'

export function useFetchActorInfo(actorName) {
  const { data, isLoading } = useQuery(
    ['search actors details', actorName],

    () => fetchActorInfoAndFilmography(actorName)
  )
  return { data, isLoading }
}
