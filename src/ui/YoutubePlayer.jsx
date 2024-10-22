import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { styled } from 'styled-components'

import { key } from '../services/GenreService'

const VodeoContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
function YoutubePlayer({ videoId: movieId }) {
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    async function fetchTrailer() {
      const url = `http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`
      const response = await fetch(url)
      const data = await response.json()
      const trailer = data.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      )
      if (trailer) {
        setVideoId(trailer.key)
      }
    }

    fetchTrailer()
  }, [movieId])

  return videoId ? (
    <VodeoContainer>
      <YouTube videoId={videoId} />
    </VodeoContainer>
  ) : (
    <p>Трейлер не найден</p>
  )
}

export default YoutubePlayer
