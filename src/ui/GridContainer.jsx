import { styled } from 'styled-components'

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  gap: 3rem;
  align-content: center;
  padding: 1rem;
  @media (max-width: 770px) {
    padding: 0.5rem;
  }
`
function GridContainer({ children }) {
  return <StyledGridContainer>{children}</StyledGridContainer>
}

export default GridContainer
