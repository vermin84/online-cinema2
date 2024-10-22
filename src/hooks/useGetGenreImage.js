import { useQuery } from '@tanstack/react-query'
import { getGenreImage } from '../services/GenreService'

export function useGetGenreImage(genreId) {
  const { data, isloading } = useQuery({
    queryKey: ['genre_photo', genreId],
    queryFn: () => getGenreImage(genreId),
  })
  return { data, isloading }
}
