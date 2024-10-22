import { styled } from 'styled-components'
import { useAtom } from 'jotai'
import { burgerMenuAtom } from '../features/atoms'

const StyledButton = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  display: block;

  width: 30px;
  height: 18px;
  z-index: 10;
  &:before,
  &:after {
    content: '';
    transition: all 0.3s 0s;
    right: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--pastel-green-400);
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  &.menu-open {
    &:after {
      top: 50%;
      transform: rotate(-45deg);
      //transform-origin: left;
    }
    &:before {
      top: 50%;
      transform: rotate(45deg);
      // transform-origin: left;
    }
  }

  @media (any-hover: hover) {
    cursor: pointer;
  }
  @media (min-width: 770px) {
    display: none;
  }
`
const StyledSpan = styled.span`
  transition: all 0.3s ease 0s;
  right: 0;
  position: absolute;
  top: 8px;
  width: 100%;
  height: 2px;
  background-color: var(--pastel-green-400);
`

function MenuBurgerButton() {
  const [isMenuOpen, setMenuOpen] = useAtom(burgerMenuAtom)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }
  return (
    <StyledButton
      onClick={toggleMenu}
      className={isMenuOpen ? 'menu-open' : ''}
    >
      {!isMenuOpen && <StyledSpan></StyledSpan>}
    </StyledButton>
  )
}

export default MenuBurgerButton
