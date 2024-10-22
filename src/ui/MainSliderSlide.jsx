import { styled } from 'styled-components'
import usePopularGenre from '../genres/usePopularGenre'

import Heading from './Heading'
import Loader from './loader'
const baseUrl = 'https://image.tmdb.org/t/p/'
const size = 'w200'
const StyledSlide = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem 2.5rem;
  border-radius: 0.4rem;
  background: var(--pastel-green-800);
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`
const StyledOverview = styled.p`
  font-size: 1.4rem;
  @media (max-width: 770px) {
    font-size: 1rem;
  }
`
const StyledImg = styled.img`
  border-radius: 0.8rem;
`
const StyledContainer = styled.div``
function MainSliderSlide({ data }) {
  const { data: genres, isLoading } = usePopularGenre()
  if (isLoading) return 'Loading...'
  const movieGenres = getGenre(data.genre_ids)
  function getGenre(arr) {
    const res = []
    genres.filter((el) => (arr.includes(el.id) ? res.push(el.name) : null))
    return res
  }

  return (
    <StyledSlide>
      <StyledImg src={`${baseUrl}${size}${data.poster_path}`} />
      <StyledContainer>
        <Heading as={'h2'}>{data.title}</Heading>
        <StyledOverview>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {movieGenres.map((el, index) =>
                index < movieGenres.length - 1 ? el + ', ' : el
              )}
            </>
          )}
        </StyledOverview>
      </StyledContainer>
    </StyledSlide>
  )
}

export default MainSliderSlide
