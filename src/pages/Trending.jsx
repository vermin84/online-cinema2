import { styled } from 'styled-components'
import { useGetPopularActors } from '../hooks/useGetPopularActors'
import { useGetPopularMovies } from '../hooks/useGetPopularMovies'
import ActorCard from '../ui/ActorCard'
import GridContainer from '../ui/GridContainer'
import Heading from '../ui/Heading'
import Loader from '../ui/loader'
import MovieCard from '../ui/MovieCard'

const StyledPage = styled.div`
  display: grid;
  gap: 3rem;
`
const StyledContainer = styled.div`
  display: grid;
  gap: 2rem;
`

function Trending() {
  const { data: movies, isLoading } = useGetPopularMovies()
  const { data: actors, isLoading: isActorsLoading } = useGetPopularActors()
  if (isLoading && isActorsLoading) return <StyledPage>Loading...</StyledPage>
  return (
    <StyledPage>
      <Heading as="h2">Trending Now</Heading>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledContainer>
          <Heading as="h3">Popular movies</Heading>
          <GridContainer>
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </GridContainer>
        </StyledContainer>
      )}
      {isActorsLoading ? (
        <Loader />
      ) : (
        <StyledContainer>
          <Heading as="h3">Popular actors</Heading>
          <GridContainer>
            {actors.map((actor) => (
              <ActorCard key={actor.name} actor={actor} />
            ))}
          </GridContainer>
        </StyledContainer>
      )}
    </StyledPage>
  )
}

export default Trending
