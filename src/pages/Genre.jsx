import { useParams } from 'react-router-dom'
import useGetMoviesByGenre from '../hooks/useGetMoviesByGenre'
import GridContainer from '../ui/GridContainer'
import Loader from '../ui/loader'
import MovieCard from '../ui/MovieCard'

function Genre() {
  const { genreId } = useParams()
  const { data, isLoading } = useGetMoviesByGenre(genreId)

  return (
    <GridContainer>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item) => (
          <MovieCard key={item.title} movie={item}>
            {item.title}
          </MovieCard>
        ))
      )}
    </GridContainer>
  )
}

export default Genre
