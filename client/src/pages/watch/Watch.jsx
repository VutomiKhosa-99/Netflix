import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import "./watch.scss"

function Watch() {
  const location = useLocation()
  const movie = location.movie
  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
      </Link>
      
      <video 
            className='video'
            autoPlay
            progress 
            controls
            src={movie.video}
        /> 
    </div>
  )
}

export default Watch