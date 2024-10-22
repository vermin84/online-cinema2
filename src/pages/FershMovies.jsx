import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { styled } from 'styled-components'
import { useLatestMovies } from '../hooks/useLatestMovies'
import GridContainer from '../ui/GridContainer'
import Heading from '../ui/Heading'
import Loader from '../ui/loader'
import MovieCard from '../ui/MovieCard'

const StyledContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
  @media (max-width: 770px) {
    gap: 1rem;
    padding: 1rem;
  }
`

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 770px) {
    gap: 0.6rem;
  }
  & li {
    font-size: 1rem;
    cursor: pointer;
    &.selected {
      color: red;
    }
    @media (max-width: 770px) {
      font-size: 0.6rem;
    }
  }
`

function Items({ currentItems }) {
  return (
    <GridContainer>
      {currentItems &&
        currentItems.map((item) => (
          <MovieCard key={item.title} movie={item}>
            {item.title}
          </MovieCard>
        ))}
    </GridContainer>
  )
}
function FershMovies() {
  const { data, isLoading } = useLatestMovies()
  const items = data
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
      <Heading as="h2">Fresh movies</Heading>
      {isLoading ? <Loader /> : <PaginatedItems itemsPerPage={15} />}
    </StyledContainer>
  )
}

export default FershMovies
