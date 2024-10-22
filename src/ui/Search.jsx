import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { useSearch } from '../hooks/useSearch'
import Input from './Input'
import SearchList from './SearchList'

const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`
function Search({ placeholder }) {
  const { data, isSuccess, handleSearch, handleCrear, search } = useSearch()
  const navigate = useNavigate()

  function searchAll(e) {
    e.preventDefault()
    navigate(`/search_results/${search}`)
    handleCrear()
  }
  return (
    <StyledSearch onSubmit={(e) => searchAll(e)}>
      <Input placeholder={placeholder} value={search} onChange={handleSearch} />
      {data && <SearchList movies={data} handleCrear={handleCrear} />}
    </StyledSearch>
  )
}

export default Search
