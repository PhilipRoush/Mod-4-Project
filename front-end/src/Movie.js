import React, { Component } from 'react';

class Movie extends Component {
    state = {
        movie: ""
    }




    render() {
        console.log(this.props.movie.title)
        return (
            <div>
                <h1>{this.props.movie.title}</h1>
                <img className="movie-image" src={`https://image.tmdb.org/t/p/original${this.props.movie.backdrop_path}`}></img>
                 <p>{this.props.movie.overview}</p>
            </div>
        );
    }
}

export default Movie;