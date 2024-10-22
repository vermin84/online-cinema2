import usePopularGenre from '../genres/usePopularGenre'
import GenreCard from '../ui/GenreCard'
import GridContainer from '../ui/GridContainer'

function Discovery() {
  const { data, isLoading } = usePopularGenre()

  return (
    <div>
      {isLoading ? (
        'Loading'
      ) : (
        <GridContainer>
          {data.map((genre) => (
            <GenreCard key={genre.name} genre={genre} />
          ))}
        </GridContainer>
      )}
    </div>
  )
}

export default Discovery
