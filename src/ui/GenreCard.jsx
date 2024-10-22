import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useGetGenreImage } from '../hooks/useGetGenreImage'
import Heading from './Heading'

const StyledCard = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease;
  transform: translateZ(0);
  border-radius: 0.8rem;
  text-align: center;
  box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
    5px 5px 5px rgba(241, 241, 237, 0.1), 2px 10px 10px rgba(241, 241, 237, 0.1);
  &:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
      10px 10px 10px rgba(241, 241, 237, 0.1),
      15px 15px 30px rgba(241, 241, 237, 0.1);
  }

  img {
    width: 100%;
  }
`

function GenreCard({ genre }) {
  const { data, isLoading } = useGetGenreImage(genre.id)

  //if (isLoading) return <div>loading...</div>
  return (
    <StyledCard to={`/genre/${genre.id}`}>
      <img src={data} />
      <Heading as="h5">{genre.name}</Heading>
    </StyledCard>
  )
}

export default GenreCard
