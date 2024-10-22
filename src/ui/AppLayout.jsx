import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Header from './Header'
import Navigation from './Navigation'
//import RightSideBar from './RightSideBar'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 1rem;
  //column-gap: 4rem;
  height: 100vh;

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`
const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem;
  overflow: auto;
  width: 100%;
`
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Navigation />
      <Container>
        <Outlet />
      </Container>
      {/* <RightSideBar />*/}
    </StyledAppLayout>
  )
}
