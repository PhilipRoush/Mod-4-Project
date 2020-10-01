import React, { Component } from 'react';

class HeaderContainer extends Component {
   
    render() { 
       let backdrop = this.props.popularMovies.map(movies =>  movies.backdrop_path)
       var randomBackdrop = backdrop[Math.floor(Math.random() * backdrop.length)]
        return ( 
            <div>
                <img className="headerImage" src={`https://image.tmdb.org/t/p/original${randomBackdrop}`}></img>
            </div>
         );
    }
}
 
export default HeaderContainer;