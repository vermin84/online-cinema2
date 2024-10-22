import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 5;
  top: calc(100% + '15px');
  right: 0;
  padding: 1rem 0.5rem;
  background: hsla(0, 0%, 0%, 0.65);
  display: grid;
  gap: 1rem;
  min-width: 250px;
  @media (max-width: 770px) {
    overflow-y: auto;
  }
`

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;

  gap: 1rem;
  font-size: 0.8rem;
  &:hover {
    color: var(--pastel-green-700);
  }
`
const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  flex: 0 0 50px;
  border-radius: 50%;
  object-fit: cover;
`
function SearchList({ movies, handleCrear }) {
  const baseUrl = 'https://image.tmdb.org/t/p/'
  const size = 'w500'

  return (
    <StyledWrapper>
      {movies.map((movie) => (
        <StyledLink
          to={`/movie/${movie.id}`}
          key={movie.id}
          onClick={handleCrear}
        >
          <StyledImage
            src={movie.poster_path && `${baseUrl}${size}${movie.poster_path}`}
            alt={'poster'}
          />
          {movie.title}
        </StyledLink>
      ))}
    </StyledWrapper>
  )
}

export default SearchList
