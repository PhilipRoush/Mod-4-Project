import React from 'react';
import MovieCard from '../MovieCard'





const PopularMoviesContainer = (props) => {
    

    
        return (
            <div className="row">
                {props.popularMovies.map(movies => <MovieCard handleClick={props.showCard} key={movies.id} movies={movies} />)}
            </div>
        );
    
}

export default PopularMoviesContainer;

