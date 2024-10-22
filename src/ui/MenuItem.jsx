import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import MaterialIcon from './MaterialIcon'
import { useAtom } from 'jotai'
import { burgerMenuAtom } from '../features/atoms'

const Styleditem = styled.li`
  padding-right: 2rem;
  border-right: 2px solid transparent;
  transition: color 0.3s ease-in-out;
  position: relative;
  font-size: 1.4rem;

  svg {
    transition: color 0.3s ease-in-out;
  }
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  &:before {
    position: absolute;
    content: '';
    bottom: 50%;
    right: 0;
    height: 0;
    width: 4px;
    background-color: red;

    transition: all 0.3s ease-in;
  }

  &:hover {
    color: var(--pastel-green-800);
  }
  &.active {
    color: var(--pastel-green-800);
    & svg {
      color: red;
    }
    &:before {
      height: 100%;
      bottom: 0;
    }
  }
`
function MenuItem({ item }) {
  const [_, setMenuOpen] = useAtom(burgerMenuAtom)
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }
  if (!item.icon || !item.link)
    return (
      <Styleditem>
        <StyledNavLink to={item.link} onClick={toggleMenu}>
          {item.icon && <MaterialIcon name={item.icon} />}
          {item.title}
        </StyledNavLink>
      </Styleditem>
    )

  return (
    <Styleditem>
      <StyledNavLink to={item.link} onClick={toggleMenu}>
        <MaterialIcon name={item.icon} />
        {item.title}
      </StyledNavLink>
    </Styleditem>
  )
}

export default MenuItem
