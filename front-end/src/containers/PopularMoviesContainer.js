import React from 'react';
import MovieCard from '../MovieCard'

    
                


const PopularMoviesContainer = (props) => {
    
    
        return ( 
            <div className="row">
                {props.popularMovies.slice(0,3).map(movie => <MovieCard key={movie.id} movie={movie} classes="posterImg poster-glow" />)}
            </div>
         );
    
}
 
export default PopularMoviesContainer;

