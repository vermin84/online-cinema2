import { styled } from 'styled-components'
import { useAtom } from 'jotai'
import { burgerMenuAtom } from '../features/atoms'
import usePopularGenre from '../genres/usePopularGenre'

import MenuList from './MenuList'
import { NavLinks } from './NavList'
const StyledNavigation = styled.aside`
  padding: 1rem;

  @media (max-width: 770px) {
    padding-top: 5rem;
    position: fixed;
    z-index: 5;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: left 0.3s;

    &::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
    &.menu-open {
      left: 0;
    }
  }
`

export default function Navigation() {
  const [isMenuOpen] = useAtom(burgerMenuAtom)
  const genres = { title: 'Genres', items: [] }
  //const { data, isLoading } = usePopularGenre()

  /*if (data) {
    genres.items = data.map((el) => ({
      title: el.name,
      link: `/genre/${el.name}`,
    }))
  }*/

  return (
    <StyledNavigation className={isMenuOpen ? 'menu-open' : ''}>
      <MenuList data={NavLinks} />
      {/*genres.items.length && <MenuList data={genres} />*/}
    </StyledNavigation>
  )
}
