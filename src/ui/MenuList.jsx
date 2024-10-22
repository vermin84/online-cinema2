import { styled } from 'styled-components'
import Heading from './Heading'
import MenuItem from './MenuItem'

const StyledList = styled.ul`
  display: grid;
  gap: 0.6rem;
  padding: 0;
`
const StyledContainer = styled.div`
  display: grid;
  gap: 1rem;
  position: relative;
`

function MenuList({ data }) {
  //console.log(data)
  if (!data.items.length) return null
  const { title, items } = data
  return (
    <StyledContainer>
      <Heading as="h3">{title}</Heading>
      <StyledList>
        {items.map((item) => (
          <MenuItem item={item} key={item.title} />
        ))}
      </StyledList>
    </StyledContainer>
  )
}

export default MenuList
