import { useQuery } from '@tanstack/react-query'
import { fetchTrailerUrl } from '../services/GenreService'

export function useGetTrailer(id) {
  const { data, isLoading } = useQuery(['get trailer', id], () =>
    fetchTrailerUrl(id)
  )
  return { data, isLoading }
}
