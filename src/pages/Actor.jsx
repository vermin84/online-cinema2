import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { useFetchActorInfo } from '../hooks/useFetchActorInfo'

import Heading from '../ui/Heading'
import MovieCard from '../ui/MovieCard'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const StyledActorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`
const StyledImgWrapper = styled.div`
  position: relative;
  padding-bottom: 40%;

  aspect-ratio: 1/1.5;
  flex: 1 0 25%;
  align-self: start;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1150px) {
    align-self: center;
    width: 70%;
  }
`
const StyledText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`
const StyledFilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
`

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & li {
    font-size: 1rem;
    cursor: pointer;
    &.selected {
      color: red;
    }
  }
`
function Actor() {
  const baseUrl = 'https://image.tmdb.org/t/p/'
  const { actorName } = useParams()
  const { data, isLoading } = useFetchActorInfo(actorName)

  const { actorDetails, actorMovies } = data || {
    actorDetails: null,
    actorMovies: null,
  }
  console.log(actorMovies)
  if (isLoading) return <div>Loading...</div>

  function Items({ currentItems }) {
    return (
      <StyledFilmWrapper>
        {currentItems &&
          currentItems.map((item) => (
            <MovieCard key={item.title} movie={item}>
              {item.title}
            </MovieCard>
          ))}
      </StyledFilmWrapper>
    )
  }
  const items = actorMovies.flat(0)
  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage

    const currentItems = items.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(items.length / itemsPerPage)

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length

      setItemOffset(newOffset)
    }
    return (
      <>
        <Items currentItems={currentItems} />
        <StyledReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    )
  }

  return (
    <StyledContainer>
      <Heading as="h2">{actorName}</Heading>
      <StyledActorInfo>
        <StyledImgWrapper>
          <img src={`${baseUrl}w400${actorDetails.profile_path}`} />
        </StyledImgWrapper>

        <StyledText>{actorDetails.biography}</StyledText>
      </StyledActorInfo>

      <PaginatedItems itemsPerPage={20} />
    </StyledContainer>
  )
}

export default Actor
