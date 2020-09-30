import React, { Component } from 'react';
import Navbar from './Navbar'
import HeaderContainer from './containers/HeaderContainer'
import SearchResultBar from './SearchResultBar'
import FavoriteBar from './FavoriteBar'
import Footer from './Footer'
import PopularMoviesContainer from './containers/PopularMoviesContainer'

const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d5b1a0507451a686fe3ad617dac6002e&language=en-US&page=1"

class MainPage extends Component {

    state = {
        popularMovies: []
    }

    componentDidMount() {
        this.fetchPopular()
    }

    fetchPopular = () => {
        fetch(popularMoviesUrl)
            .then(res => res.json())
            .then(popularMovies => this.setState({ popularMovies: popularMovies.results }))
    }


    render() {
        return (
            <div className="MainPage-Wrapper">
                <Navbar />
                <SearchResultBar />
                <HeaderContainer popularMovies={this.state.popularMovies}/>
                <h4>Trending</h4>
                <PopularMoviesContainer popularMovies={this.state.popularMovies} />
                <FavoriteBar />
                <Footer />
            </div>
        );
    }


}

export default MainPage;