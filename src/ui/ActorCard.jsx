import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useFetchActorInfo } from '../hooks/useFetchActorInfo'

import Heading from './Heading'

const StyledActorCard = styled(NavLink)`
  text-align: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  transition: 0.3s all;

  box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
    5px 5px 5px rgba(241, 241, 237, 0.1), 2px 10px 10px rgba(241, 241, 237, 0.1);
  &:hover {
    box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
      10px 10px 10px rgba(241, 241, 237, 0.1),
      15px 15px 30px rgba(241, 241, 237, 0.1);
    img {
      transform: scale(1.1);
    }
  }
`
const StyledImgWrapper = styled.div`
  overflow: hidden;
  display: flex;

  align-items: center;
  justify-content: center;
  @media (max-width: 770px) {
    //flex: 1 1 60%;
  }
`
const StyledImg = styled.img`
  max-width: 100%;
  transition: 0.3s;
  @media (max-width: 770px) {
    //object-fit: cover;
  }
  //max-height: 100%;
  //aspect-ration: 1 / 2;
`
const StyledSpan = styled.span`
  font-size: 0.8rem;
  @media (max-width: 770px) {
    font-size: 0.6rem;
  }
`
const StyledFooter = styled.div`
  text-align: center;
  padding: 0 1rem 2rem 1rem;
  @media (max-width: 770px) {
    padding: 0.2rem;
  }
`
function ActorCard({ actor }) {
  //const { data, isLoading } = useSearchActorPhotos(actor.name)
  const baseUrl = 'https://image.tmdb.org/t/p/'
  const { data, isLoading } = useFetchActorInfo(actor.name)

  const { actorDetails } = data || {
    actorDetails: null,
  }
  if (isLoading) return <div>Loading...</div>
  if (actorDetails.profile_path)
    return (
      <StyledActorCard to={`/actor/${actor.name}`}>
        <Heading as={'h5'}>{actor.name}</Heading>
        {!isLoading && (
          <StyledImgWrapper>
            <StyledImg src={`${baseUrl}w300${actorDetails.profile_path} `} />
          </StyledImgWrapper>
        )}
        {actor.character && (
          <StyledFooter>
            <StyledSpan>as</StyledSpan>
            <Heading as="h5">{actor.character}</Heading>
          </StyledFooter>
        )}
      </StyledActorCard>
    )
}

export default ActorCard
