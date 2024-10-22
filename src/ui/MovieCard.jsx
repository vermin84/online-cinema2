import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

const StyledLink = styled(NavLink)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  transform: translateZ(0);
  border-radius: 0.8rem;
  box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
    5px 5px 5px rgba(241, 241, 237, 0.1), 2px 10px 10px rgba(241, 241, 237, 0.1);
  &:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
      10px 10px 10px rgba(241, 241, 237, 0.1),
      15px 15px 30px rgba(241, 241, 237, 0.1);
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  object-fit: cover;
  /*transition: transform 0.3s ease;*/
  will-change: transform;
  transform: translateZ(0);
  &:hover {
    transform: translateZ(0);
  }
`

function MovieCard({ movie }) {
  const baseUrl = 'https://image.tmdb.org/t/p/'
  const size = 'w300'
  return (
    <StyledLink to={`/movie/${movie.id}`}>
      {movie.poster_path ? (
        <StyledImage
          src={movie.poster_path && `${baseUrl}${size}${movie.poster_path}`}
          alt={'poster'}
        />
      ) : (
        movie.title
      )}
    </StyledLink>
  )
}

export default MovieCard
