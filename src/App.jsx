import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import FreshMovies from './pages/FershMovies'
import Movie from './pages/Movie'

import Trending from './pages/Trending'
import Discovery from './pages/Discovery'
import MainProvider from './services/MainProvider'
import SearchResults from './pages/SearchResults'
import Actor from './pages/Actor'
import Genre from './pages/Genre'

function App() {
  return (
    <MainProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fresh_movies" element={<FreshMovies />} />
            <Route
              path="/search_results/:results"
              element={<SearchResults />}
            />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/genre/:genreId" element={<Genre />} />
            <Route path="/actor/:actorName" element={<Actor />} />
            <Route path="/discovery" element={<Discovery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App
