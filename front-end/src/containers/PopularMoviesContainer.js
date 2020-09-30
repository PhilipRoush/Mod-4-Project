import React from 'react';
import MovieCard from '../MovieCard'





const PopularMoviesContainer = (props) => {
    

    
        return (
            <div className="row">
                {props.popularMovies.map(movies => <MovieCard key={movies.id} movies={movies} />)}
            </div>
        );
    
}

export default PopularMoviesContainer;

