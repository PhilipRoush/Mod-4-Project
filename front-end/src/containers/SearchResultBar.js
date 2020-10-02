import React, { Component } from 'react';
import MovieCard from '../MovieCard'

const SearchResultBar = (props) => {
    return (
        <div className="row">
            {props.searchMovies.map(movies => <MovieCard handleClick={props.showCard} key={movies.id} movies={movies} />)}
        </div>
    );
}

export default SearchResultBar;


