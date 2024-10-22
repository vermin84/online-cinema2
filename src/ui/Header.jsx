import { styled } from 'styled-components'

import Logo from './Logo'
import MenuBurgerButton from './MenuBurgerButton'
import Search from './Search'

const StyledHeader = styled.header`
  grid-column: 1/-1;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  border-bottom: 2px solid black;
  @media (max-width: 770px) {
    padding: 1rem;
    gap: 2rem;
  }
`

const Controls = styled.div`
  //justify-item: flex-end;
  display: flex;
  align-items: center;
  gap: 1rem;
`

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Controls>
        <Search placeholder="Search..." />
        <MenuBurgerButton />
      </Controls>
    </StyledHeader>
  )
}

export default Header
