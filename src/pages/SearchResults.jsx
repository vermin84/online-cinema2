import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { getMovies } from '../services/GenreService'
import GridContainer from '../ui/GridContainer'
import Loader from '../ui/loader'
import MovieCard from '../ui/MovieCard'

function SearchResults() {
  const { results } = useParams()
  const { data, isLoading } = useQuery(['search all movie list', results], () =>
    getMovies(results)
  )
  if (isLoading) return <Loader />
  return (
    <GridContainer>
      {data.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  )
}

export default SearchResults
