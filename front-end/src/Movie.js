import React, { Component } from 'react';

class Movie extends Component {
    state = {
        movie: ""
    }

    render() {

        return (
            <div>
                <h1>{this.props.movie.title}</h1>
                <img className="movie-image" src={`https://image.tmdb.org/t/p/original${this.props.movie.backdrop_path}`}></img>
                <div className="description-box">
                    <p>{this.props.movie.overview}</p>
                </div>
            </div>
        );
    }
}

export default Movie;