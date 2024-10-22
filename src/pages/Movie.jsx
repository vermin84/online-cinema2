import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { useGetActors } from '../hooks/useGetActors'

import { useGetMovieById } from '../hooks/useGetMovieById'
import { useGetSimilarMovies } from '../hooks/useGetSimilarMovies'
import ActorCard from '../ui/ActorCard'
import GridContainer from '../ui/GridContainer'

import Heading from '../ui/Heading'
import Loader from '../ui/loader'
import MovieCard from '../ui/MovieCard'
import YoutubePlayer from '../ui/YoutubePlayer'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 2rem 1.5rem;
  flex-wrap: wrap;
`
const StyledOverview = styled.div`
  flex: 1 1 50%;
  font-size: 1rem;
  align-self: start;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StyledImg = styled.div`
  flex: 0 0 40%;

  & img {
    width: 100%;
  }

  @media (max-width: 1150px) {
    flex: 0 0 80%;
  }
`
const StyledMovieContainer = styled.div`
  display: grid;
  gap: 3rem;
  @media (max-width: 770px) {
    gap: 1rem;
  }
`

function Movie() {
  const { movieId } = useParams()

  const { data, isLoading } = useGetMovieById(movieId)

  const { data: actors, isLoading: isActorsLoading } = useGetActors(movieId)

  const { data: similarMovies, isLOading: isLoadingSimilar } =
    useGetSimilarMovies(movieId)

  const baseUrl = 'https://image.tmdb.org/t/p/'
  if (isLoading) return <div>Loading...</div>
  const { title, release_date, imdb_id, poster_path, backdrop_path } = data

  return (
    <StyledMovieContainer>
      <Heading as="h1">{title}</Heading>
      <StyledContainer>
        <StyledImg>
          <img src={`${baseUrl}w400${poster_path}`} />
        </StyledImg>

        <StyledOverview>
          <p>{data.overview}</p>
          <YoutubePlayer videoId={movieId} />
        </StyledOverview>
      </StyledContainer>
      <Heading as="h2">Actors</Heading>
      <GridContainer>
        {isActorsLoading ? (
          <Loader />
        ) : (
          actors.map((actor) => <ActorCard actor={actor} key={actor.name} />)
        )}
      </GridContainer>
      <Heading as="h2">Similar Movies</Heading>
      {similarMovies && (
        <GridContainer>
          {isLoadingSimilar ? (
            <Loader />
          ) : (
            similarMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))
          )}
        </GridContainer>
      )}
    </StyledMovieContainer>
  )
}

export default Movie
