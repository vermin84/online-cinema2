import axios from 'axios'

export const key = '7788e3316511533eb7faf40b8fe0a13a'
export const URL = 'https://api.themoviedb.org'
export const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg4ZTMzMTY1MTE1MzNlYjdmYWY0MGI4ZmUwYTEzYSIsInN1YiI6IjY1ZjZjZDdjODFkYTM5MDE4NjYyYzY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxbCnn7I_gjTTdETYUnvDqu0jhouTagOSEnWY1bCa0M'
//search all genres of movies
export async function fetchMovieGenres() {
  const apiUrl = `${URL}/3/genre/movie/list?api_key=${key}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    return data.genres
  } catch (error) {
    console.error('Error fetching movie genres:', error)
    return null
  }
}
//search actors from movie
export async function getActors(movieid) {
  const url = `${URL}/3/movie/${movieid}/credits?api_key=${key}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    const actors = data.cast.map((actor) => ({
      name: actor.name,
      character: actor.character,
    }))

    if (actors.length > 10) return actors.splice(0, 10)

    return actors
  } catch (error) {
    console.error('Error fetching movie actors:', error)
    return []
  }
}

//search actors photo
export async function searchActorPhotos(actorName) {
  const actor = await searchActor(actorName)
  if (actor) {
    const photos = await getActorPhoto(actor.id)
    const baseUrl = 'https://image.tmdb.org/t/p/'

    const imgPath = `${baseUrl}w300${photos?.[0].file_path}`
    if (imgPath) return imgPath
    return null

    // Здесь можно обработать полученные фотографии, например, отобразить их в приложении
  } else {
    console.log('Actor not found')
  }
}

export async function getActorPhoto(actorId) {
  const url = `https://api.themoviedb.org/3/person/${actorId}/images?api_key=${key}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.profiles
  } catch (error) {
    console.error('Error fetching actor photos:', error)
    return []
  }
}
async function searchActor(actorName) {
  const url = `https://api.themoviedb.org/3/search/person?api_key=${key}&query=${encodeURIComponent(
    actorName
  )}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data.results.length > 0) {
      // Возвращаем первого найденного актера (предполагается, что первый результат наиболее релевантен)
      return data.results[0]
    } else {
      return null
    }
  } catch (error) {
    console.error('Error searching for actor:', error)
    return null
  }
}

//get actor ID by actor name
async function searchActorId(actorName) {
  const url = `https://api.themoviedb.org/3/search/person?api_key=${key}&query=${encodeURIComponent(
    actorName
  )}&include_adult=false`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.results.length > 0 ? data.results[0] : null
  } catch (error) {
    console.error('Error searching for actor:', error)
    return null
  }
}
//search actors details
async function getActorDetails(actorId) {
  const detailsUrl = `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`
  const creditsUrl = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${key}&language=en-US`

  try {
    const [detailsResponse, creditsResponse] = await Promise.all([
      fetch(detailsUrl),
      fetch(creditsUrl),
    ])

    const details = await detailsResponse.json()
    const credits = await creditsResponse.json()

    return {
      details: details,
      movies: credits.cast,
    }
  } catch (error) {
    console.error('Error getting actor details:', error)
    return null
  }
}
// find actors info and filmography
export async function fetchActorInfoAndFilmography(actorName) {
  const actor = await searchActor(actorName)

  if (actor) {
    const result = await getActorDetails(actor.id)

    return { actorDetails: result.details, actorMovies: result.movies }
  } else {
    console.log('Actor not found')
  }
}

//search movie from query
export async function getMovies(query) {
  const url = `${URL}/3/search/movie?api_key=${key}&query=${query}`
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data.results
  } catch (error) {
    console.error('Error fetching movie genres:', error)
    return null
  }
}

//search new movies
export async function getNewestMovie() {
  try {
    const response = await fetch(
      `${URL}/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    )
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    return data.results
  } catch (err) {
    console.log(err.message)
    return null
  }
}

//search popular movies
export async function getPopularMovie() {
  try {
    const response = await fetch(
      `${URL}/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    return data.results
  } catch (err) {
    console.log(err.message)
    return null
  }
}
//search popular aactors
export async function getPopularActors() {
  try {
    const response = await fetch(
      `${URL}/3/person/popular?api_key=${key}&language=en-US&page=1`
    )
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    return data.results
  } catch (err) {
    console.log(err.message)
    return null
  }
}
//search similar movies
export async function getSimilarMovies(movieId) {
  const url = `${URL}/3/movie/${movieId}/similar?api_key=${key}&language=en-US`

  try {
    const response = await fetch(url)

    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    return data.results
  } catch (err) {
    console.log(err.message)
    return null
  }
}

//search now playing movies
export async function getLatestMovies() {
  //const url = `${URL}/3/movie/now_playing?api_key=${key}&language=en-US`
  let results = []
  for (let i = 1; i <= 4; i++) {
    const url = `${URL}/3/movie/now_playing?api_key=${key}&language=en-US&page=${i}`
    try {
      const response = await fetch(url)

      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      results = results.concat(data.results)
    } catch (err) {
      console.log(err.message)
    }
  }

  return results
}

//search movie by movieId
export async function getMovieById(id) {
  const url = `${URL}/3/movie/${id}?api_key=${key}`
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching movie genres:', error)
    return null
  }
}

//search trailer of movie on youtube
export async function fetchTrailerUrl(movieId) {
  //const apiKey = 'YOUR_API_KEY';
  const response = await fetch(
    `${URL}/3/movie/${movieId}/videos?api_key=${key}`
  )
  const data = await response.json()

  const trailer = await data.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  )

  if (trailer) {
    return trailer.key
  } else {
    return 'Trailer not found :('
  }
}

//get movies by genre id

export async function fetchMoviesByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genreId}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    return data.results
  } catch (error) {
    console.error('Error fetching data: ', error)
    return null
  }
}

//get poster of first movie in the list
export async function getGenreImage(genreId) {
  const movies = await fetchMoviesByGenre(genreId)
  // console.log(movies)
  if (movies && movies.length > 0) {
    const movie = movies[2] // берем первый фильм из списка

    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    return imageUrl
  } else {
    console.log('No movies found for this genre')
    return null
  }
}
