import { styled } from 'styled-components'
import Heading from '../ui/Heading'
import MainSlider from '../ui/MainSlider'
const StyledHomeWrapper = styled.div`
  padding: 1rem 2rem;
  @media (max-width: 770px) {
    padding: 0.2rem 1rem;
  }
`
function Home() {
  return (
    <StyledHomeWrapper>
      <Heading as="h1">Home</Heading>
      <MainSlider />
    </StyledHomeWrapper>
  )
}

export default Home
