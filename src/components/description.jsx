import React from 'react'
import { Link, useParams } from 'react-router-dom'
import image from '../img.png'

const Description = ({ movies }) => {
  let { id } = useParams()
  id = id.substring(1)
  // console.log(id)

  return (
    <>
      <Link to='/'>
        <div className='image-container'>
          <img src={image} alt='' />
        </div>
      </Link>

      {movies
        .filter((movie) => movie.title === id)
        .map((movie) => {
          return (
            <div className='card'>
              <div key={movie.id} className='app__description-card'>
                <iframe
                  width='100%'
                  height='300'
                  src={movie.postURL}
                  title={movie.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullscreen
                  className='frame'
                ></iframe>

                <div className='app__description'>
                  <div className='posterURL'>
                    <img src={movie.posterURL} alt='profile' />
                  </div>

                  <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Description
