import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const MovieCard = (props) => {
    // let fetchID;
    // props.movieObject.movieAPI_ID ? fetchID = props.movieObject.movieAPI_ID : fetchID = props.movieObject.id

    // let imageUrl = `https://image.tmdb.org/t/p/w500${props.movieObject.poster_path}`
    return (
        
      <div onClick={() => props.handleClick(props.movies)} className="movie-card">
          {/* <Router>
            <Link to={`/movies`}></Link>
          </Router> */}
        <div className="movie-image-container">
          <img className="movie-poster" alt={props.movies.title} src={`https://image.tmdb.org/t/p/w92${props.movies.poster_path}`}></img>
        </div>
      </div>
    )

}

export default MovieCard


