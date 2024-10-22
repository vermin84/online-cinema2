import { styled } from 'styled-components'

const StyledLogo = styled.div`
  font-size: 1.2rem;
  color: var(--pastel-green-400);
  line-height: 1;

  & span {
    font-size: 2.5rem;
    color: red;
    @media (max-width: 770px) {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 770px) {
    font-size: 0.7rem;
  }
`

function Logo() {
  return (
    <StyledLogo>
      Push<span>Ok!</span> <br></br>
      cinema
    </StyledLogo>
  )
}

export default Logo
