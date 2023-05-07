import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function MovieCard(props) {
  return (
    <div className='app__card'>
      <iframe
        width='100%'
        height='300'
        src={props.movie.postURL}
        title={props.movie.title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullscreen
        className='frame'
      ></iframe>

      <Link className='link' to={`/home/:${props.movie.title}`}>
        <div className='app__description'>
          <div className='posterURL'>
            <img src={props.movie.posterURL} alt='profile' />
          </div>

          <div>
            <h3>{props.movie.title}</h3>
            <p>{props.movie.description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default MovieCard
