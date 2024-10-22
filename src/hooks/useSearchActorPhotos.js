import { useQuery } from '@tanstack/react-query'
import { searchActorPhotos } from '../services/GenreService'

export function useSearchActorPhotos(actorName) {
  const { data, isLoading } = useQuery(['get actor photos', actorName], () =>
    searchActorPhotos(actorName)
  )
  return { data, isLoading }
}
