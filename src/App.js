import React, { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import MovieCard from './components/Movie_Card'
import movieData from './data'
import Description from './components/description'

function App() {
  let [movies, setMovies] = useState(movieData)

  let [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <nav className='app__nav'>
        <h1 className='app__title'>Movie Search App</h1>

        <form action=''>
          <input
            type='search'
            placeholder='search here'
            className='app__search-input'
            onChange={handleSearch}
          />
        </form>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <div className='app__movie-container'>
              <div className='app__movie-list'>
                {movies
                  .filter((movie) => {
                    return movie.title.toLowerCase().includes(searchTerm)
                  })
                  .map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                  })}
              </div>
            </div>
          }
        />
        <Route path='/home/:id' element={<Description movies={movies} />} />
      </Routes>
    </>
  )
}

export default App
